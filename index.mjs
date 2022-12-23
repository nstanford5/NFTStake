import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib({REACH_NO_WARN: 'Y'});
const startingBalance = stdlib.parseCurrency(1000);
const accA = await stdlib.newTestAccount(startingBalance);
console.log('Hello, Alice -- welcome to Wonderland!');
const nft = await stdlib.launchToken(accA, "Name", "SYM", {supply: 1});

console.log('Launching...');
const ctcA = accA.contract(backend);

const startBuyer = async () => {
  const acc = await stdlib.newTestAccount(startingBalance);
  await acc.tokenAccept(nft.id);
  await stdlib.transfer(accA, acc, 1, nft.id);
  const ctc = acc.contract(backend, ctcA.getInfo());
  // const b = await ctc.a.buy();
  // console.log(`Buy api call complete.\nBuyer NFT Balance: ${await stdlib.balanceOf(acc, nft.id)}`);
  // await stdlib.wait(10);
  // why is this returning zero?
  const numNet = stdlib.formatCurrency(await stdlib.balanceOf(acc));
  console.log(`Number of network tokens: ${numNet}`);
  console.log(`Running deposit function`);
  const d = await ctc.a.deposit();
  console.log(`deposit api call complete success=${d}`);
  console.log(`Buyer NFT Balance test: ${await stdlib.balanceOf(acc, nft.id)}`);
  // add a try...catch here for wrong caller
  const w = await ctc.a.wd();
  console.log(`Withdraw function complete`);
  console.log(`Buyer wd balance: ${await stdlib.balanceOf(acc, nft.id)}`);
};

console.log('Starting backends...');
await Promise.all([
  backend.Admin(ctcA, {
    ...stdlib.hasRandom,
    cost: stdlib.parseCurrency(5),
    tok: nft.id,
    supply: nft.supply,
    launched: async (c) => {
      console.log(`Contract ready at ${c}`);
      await startBuyer();
    },
  }),
]);

console.log('Goodbye, Alice and Bob!');
