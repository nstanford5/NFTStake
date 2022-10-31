/**
 * Staking contract
 * 
 * Covers:
 * Non-network tokens in parallelReduce
 * More advanced invariant
 */

'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Admin', {
    cost: UInt,
    tok: Token,
    launched: Fun([Contract], Null),
  });
  const B = API({
    buy: Fun([], Bool),
    deposit: Fun([], Bool),
  });
  init();
  
  A.only(() => {
    const cost = declassify(interact.cost);
    const tok = declassify(interact.tok);
  });
  const amt = 1;
  A.publish(cost, tok);
  A.interact.launched(getContract());
  commit();
  A.pay([[amt, tok]]);

  const [count] = parallelReduce([0])
    .paySpec([tok])// include all tokens here
    .invariant(balance(tok) == amt - count)
    .invariant(balance() == cost * count)
    .while(true)
    .api_(B.buy, () => {
      check(count < 1, "sorry, this contract is full");
      // [networkTokenAmt, [non-netTokAmt, non-netTok]]
      return[[cost, [0, tok]], (ret) => {
        transfer(amt, tok).to(this);
        ret(true)
        return [count + 1];
      }];
    })
    .api_(B.deposit, () => {
      check(count == 0, "sorry, this function is not ready")
      return[[0, [amt, tok]], (ret) => {
        transfer(balance()).to(A);
        ret(true);
        return[count - 1];
      }];
    })
    .timeout(relativeTime(20), () => {
      // do more stuff here
      A.publish();
      return [count];
    });
  transfer(balance(tok)).to(A);
  transfer(balance()).to(A);
  commit();
  exit();
});// end of Reach.App