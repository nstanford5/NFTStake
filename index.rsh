/**
 * In this version funds are inaccessible until the deadline
 * 
 * future versions may allow withdrawal and 
 * 
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
  //A.pay(rewards);
  A.interact.launched(getContract());

  // UInt here is going to store the time for rewards
  const pMap = new Map(Address, UInt);
  const [invFlag, rLeft, rOut, who] = parallelReduce([0, rewards, 0, A])
    .define(() => {
      const d = fromSome(pMap[who], 0);
      V.dead.set(d);
    })
    .paySpec([tok])
    //.invariant(balance() == rewards - rOut, "network token balance wrong")
    //.invariant(balance() == rLeft - rOut, "rewards tracking balance wrong")
    //.invariant(rOut <= rewards, "rewards tracking2 balance wrong")
    .invariant(balance() == 0)
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
        // token in the contract, turn this function off
        return[invFlag + 1, rLeft, rOut, this];
      }];
    })
    .api_(B.wd, () => {
      check(invFlag == 1, "No assets here to withdraw");
      check(isSome(pMap[this]), "this function is not for you");
      //check(rOut < rewards, "too many rewards paid out already");
      return[[0, [0, tok]], (ret) => {
        const time = thisConsensusTime();
        const end = fromSome(pMap[this], 0);
        // if(end > time){
        //   const due = rewards - (end - thisConsensusTime());
        //   //transfer(due).to(this);
        //   transfer(amt, tok).to(this);
        //   delete pMap[this];
        //   ret(true);
        //   return[invFlag - 1, rLeft - due, rOut + due, A];
        // } else {
           const due = rewards;
          //transfer(rewards).to(this);
          transfer(amt, tok).to(this);
          delete pMap[this];
          ret(true);
          return[invFlag - 1, rLeft - due, rOut + due, who];
        //}
      }];
    })
  commit();
  exit();
})