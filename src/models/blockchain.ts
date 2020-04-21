import { Block } from './block';

import { IBlock } from 'interfaces/block.interface';

import { IBlockChain } from 'interfaces/blockchain.interface';

/**
 *
 *
 * @export
 * @class BlockChain
 * @implements {IBlockChain}
 */
export class BlockChain implements IBlockChain {
    chain: IBlock[];
    difficulty: number;

    constructor(difficulty: number) {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = difficulty;
    }

    /**
     *
     *
     * @returns {IBlock}
     * @memberof BlockChain
     */
    createGenesisBlock(): IBlock {
        const data = {
            age: 26,
            name: 'El primero',
            surname: 'Don',
        };
        return new Block(0, data, '0');
    }

    /**
     *
     *
     * @returns
     * @memberof BlockChain
     */
    getLatestBlock(): IBlock {
        return this.chain[this.chain.length - 1];
    }

    /**
     *
     *
     * @param {IBlock} newBlock
     * @memberof BlockChain
     */
    addBlock(newBlock: IBlock): void {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    /**
     *
     *
     * @returns true or false
     * @memberof BlockChain
     */
    isChainIsValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}
