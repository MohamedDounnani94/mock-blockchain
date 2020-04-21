export interface IBlock {
  data: IData;
  index: number;
  hash: string;
  nonce: number;
  previousHash: string;
  calculateHash(): string;
  mineBlock(difficulty: number);
}

export interface IData {
  name: string;
  surname: string;
  age: number;
}
