import { INanoSQLInstance } from "./interfaces";
export interface ICrowIndexQuery {
    key: any;
    num: number;
    lat: number;
    lon: number;
}
export declare const attachDefaultFns: (nSQL: INanoSQLInstance) => void;
