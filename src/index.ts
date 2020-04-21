import { Block } from './models/block';
import { BlockChain } from './models/blockchain';

const difficulty = Math.floor((Math.random() * 5)) + 1;

console.log(`Start mining by difficulty of ${difficulty}`);

const blockchainExample = new BlockChain(difficulty);

const data = [
  {
    age: 26,
    name: 'El furiosso',
    surname: 'Don'
  },
  {
    age: 25,
    name: 'Lenominado',
    surname: 'Don'
  }
];

console.time('Starting');

for (let i = 1; i < data.length + 1; i++) {
  console.log(`Start Mining block ${i}...`);
  blockchainExample.addBlock(new Block(i, data[i]));
}

console.timeEnd('Starting');

console.log(`Is BlockChain valid? ${blockchainExample.isChainIsValid() ? 'Yes' : 'No'}`);

console.log(JSON.stringify(blockchainExample, null, 4));
