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
  const ctc = acc.contract(backend, ctcA.getInfo());
  const b = ctc.a.buy();
  console.log("Buy api call complete");
  await stdlib.wait(10);
  // why is this returning zero?
  const numNet = stdlib.formatCurrency(await stdlib.balanceOf(acc));
  console.log(`Number of network tokens: ${numNet}`);
  const numTok = stdlib.formatWithDecimals(await stdlib.balanceOf(acc, nft.id), 4);
  console.log(`numTok is ${numTok}`);
  if(stdlib.formatCurrency(numTok) > 0){
    console.log(`Running deposit function`);
    const d = ctc.a.deposit();
    console.log(`deposit api call complete`);
  }
};

console.log('Starting backends...');
await Promise.all([
  backend.Admin(ctcA, {
    ...stdlib.hasRandom,
    cost: stdlib.parseCurrency(5),
    tok: nft.id,
    supply: nft.supply,
    launched: (c) => {
      console.log(`Contract ready at ${c}`);
      startBuyer();
    },
  }),
]);

console.log('Goodbye, Alice and Bob!');
