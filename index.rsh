'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Admin', {
    cost: UInt,
    tok: Token,
    launched: Fun([Contract], Null),
  });
  const B = API({
    deposit: Fun([], Bool),
    wd: Fun([], Bool),
  });
  init();

  A.only(() => {
    const cost = declassify(interact.cost);
    const tok = declassify(interact.tok);
  })
  const amt = 1;
  A.publish(cost, tok);
  A.interact.launched(getContract());

  // UInt here is going to store the time for rewards
  const pMap = new Map(Address, UInt);
  const [invFlag] = parallelReduce([0])
    .paySpec([tok])
    .invariant(balance() == 0, "network token balance wrong")
    .invariant(balance(tok) == invFlag, "nft balance wrong")
    .invariant(pMap.size() == invFlag, "Size wrong")
    .while(true)
    .api_(B.deposit, () => {
      check(invFlag != 0, "sorry this function is not ready");
      check(isNone(pMap[this]), "you are already here");
      check(balance(tok) == amt, "dont call me maybe")
      return[[0, [amt, tok]], (ret) => {
        pMap[this] = 10;// dummy 10, this should be time
        ret(true);
        // token in the contract, turn this function off
        return[invFlag + 1];
      }];
    })
    .api_(B.wd, () => {
      check(invFlag != 1, "sorry this function is not ready");
      check(isSome(pMap[this]), "this function is not for you");
      check(balance(tok) == 0, "dont call me maybe");// I don't think this had effect
      return[[0, [0, tok]], (ret) => {
        transfer(amt, tok).to(this);
        delete pMap[this];
        ret(true);
        return[invFlag - 1];
      }];
    })
  commit();
  exit();
})