export interface IFact {
  fact: string;
  length?: number;
}

export interface IAllData {
  data: IFact[];
  from?: number;
  last_page: number;
}
