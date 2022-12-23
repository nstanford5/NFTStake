import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib({REACH_NO_WARN: 'Y'});
const startingBalance = stdlib.parseCurrency(1000);
const accA = await stdlib.newTestAccount(startingBalance);
console.log('Hello, Alice -- welcome to Wonderland!');
const nft = await stdlib.launchToken(accA, "Name", "SYM", {supply: 1});

console.log('Launching...');
const ctcA = accA.contract(backend);

const sellTok = async (from, to) => {
  await to.tokenAccept(nft.id);
  await stdlib.transfer(from, to, 1, nft.id);
  console.log(`Third party token sale complete.`);
};

const makeUser = async (i) => {
  const acc = await stdlib.newTestAccount(startingBalance);
  const ctc = acc.contract(backend, ctcA.getInfo());
  console.log(`Making user ${i}`);
  return [acc, ctc];
}

const deposit = async (ctc) => {
  let d = false;
  let endTime = 0;
  try{
    console.log(`Running deposit function`);
    endTime = await ctc.a.deposit();
    d = true;
  }catch(e){
    console.log(e);
  }
  console.log(`Deposit function complete is ${d}`);
  return endTime;
}

const wd = async (ctc) => {
  let d = false;
  try{
    console.log(`Running withdraw function`);
    d = await ctc.a.wd();
  }catch(e){
    console.log(e);
  }
  console.log(`Withdrawal function complete is ${d}`);
}

const tokBal = async (acc) => {
  const b = await stdlib.balanceOf(acc, nft.id);
  console.log(`Buyer ${stdlib.formatAddress(acc.getAddress())} nft balance is ${b}`);
}

const getTime = async () => {
  const t = await stdlib.getNetworkTime();
  console.log(`The current network time from the frontend is: ${t}`);
}

const go = async () => {
  const [acc0, ctc0] = await makeUser(1);
  const [acc1, ctc1] = await makeUser(2);
  await sellTok(accA, acc0);

  const t0 = await deposit(ctc0);
};

// should you implement this with disconnect?
await ctcA.p.Admin({
  params: {
    tok: nft.id,
    deadline: 30,// in blocks
    rewards: stdlib.parseCurrency(30),
  },    
  launched: async (c) => {
    console.log(`Contract ready at ${c}`);
    await go();
  },
})
console.log('Exiting...');
