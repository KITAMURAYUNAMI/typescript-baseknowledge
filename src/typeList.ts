/**TypeScriptの基本の型 */

//boolean
let bool: boolean = true;

//number 数値
let num: number = 0;

//string 文字
let str: string = "a";

// Array 配列 どちらでも可
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "a"];

//any 何を入れても良い型
let any1: any = false;

//void 何も返却しない型
const funcA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefined
let undrfind1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "aaa" }; //オブジェクトの中身の型を指定することができる
