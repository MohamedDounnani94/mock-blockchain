import { IBlock } from './block.interface';

export interface IBlockChain {
    chain: IBlock[];
    difficulty: number;

    createGenesisBlock(): IBlock;
    getLatestBlock(): IBlock;
    // tslint:disable-next-line:variable-name
    addBlock(IBlock): void;
    isChainIsValid(): boolean;

}
