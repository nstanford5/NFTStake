/**
 * In this version funds are inaccessible until the deadline
 * future versions may allow withdrawal and payments pro-rata
 */

'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Admin', {
    params: Object({
      tok: Token,
      deadline: UInt,// in blocks
      rewards: UInt,// in ALGOs
    }),
    launched: Fun([Contract], Null),
    seeTime: Fun([UInt], Null),
  });
  const B = API({
    deposit: Fun([], UInt),
    wd: Fun([], Bool),
  });
  const V = View({
    dead: UInt,
  });
  init();

  A.only(() => {
    const {tok, deadline, rewards} = declassify(interact.params);
  })
  const amt = 1;
  A.publish(tok, deadline, rewards);
  commit();
  A.pay(rewards);
  A.interact.launched(getContract());

  const pMap = new Map(Address, UInt);
  const [invFlag] = parallelReduce([0])
    .paySpec([tok])
    .invariant(balance() == rewards, "network token balance wrong")
    .invariant(balance(tok) == invFlag, "nft balance wrong")
    .invariant(pMap.size() == invFlag, "Size wrong")
    .while(true)
    .api_(B.deposit, () => {
      check(invFlag == 0, "sorry, this contract is already occupied");// not necessary to compile, but I like it
      check(isNone(pMap[this]), "you are already here");
      return[[0, [amt, tok]], (ret) => {
        const end = thisConsensusTime() + deadline;
        pMap[this] = end;
        ret(end);
        return[invFlag + 1];
      }];
    })
    .api_(B.wd, () => {
      check(invFlag == 1, "No assets here to withdraw");
      check(isSome(pMap[this]), "this function is not for you");
      return[[0, [0, tok]], (ret) => {
        const time = thisConsensusTime();
        const end = fromSome(pMap[this], 0);
        transfer(amt, tok).to(this);
        delete pMap[this];
        ret(true);
        return[invFlag - 1];
      }];
    })
  transfer(rewards).to(A);
  commit();
  exit();
})