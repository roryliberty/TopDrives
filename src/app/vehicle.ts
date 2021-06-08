/** 1. This tells me what a Vehicle looks like */
export interface Vehicle {
  id: number;
  make: string;
  model: string;
  topSpeed?: number;
  zeroToSixty?: number;
  handling?: number;
  drive?: string;
}
