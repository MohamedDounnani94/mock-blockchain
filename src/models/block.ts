import { IBlock, IData } from 'interfaces/block.interface';

const SHA256 = require('crypto-js/sha256');

/**
 *
 *
 * @export
 * @class Block
 * @implements {IBlock}
 */
export class Block implements IBlock {
    data: IData;
    index: number;
    hash: string;
    nonce: number;
    previousHash: string;
    private timestamp: Date;

    constructor(index: number, data: IData, previousHash?) {
        this.index = index;
        this.timestamp = new Date();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    /**
     *
     *
     * @returns hash
     * @memberof Block
     */
    calculateHash(): string {
        return SHA256(this.index + this.timestamp.toString() + this.previousHash + this.nonce + JSON.stringify(this.data)).toString();
    }

    /**
     *
     *
     * @param {*} difficulty
     * @memberof Block
     */
    mineBlock(difficulty): void {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log('Block mined: ', this.hash);
    }

}
