// 声明式类型
function funcType(name: string, age: number): number {
  return age
}

var ageNum: number = funcType("张三", 18)

// 函数参数不确定
function funcType2(name: string, age: number, sex?: string): number {
  return age
}

var ageNum2: number = funcType2("张三", 18, "男")

// 函数参数的默认值
function funcType3(name: string = "张三", age: number = 19): number {
  return age
}

// 表达式类型函数
var funcType4 = function (name: string, age: number): number {
  return age
}

var funcType5: (name: string, age: number) => number = function (name: string, age: number): number {
  return age
}

interface funcType6 {
  (name: string, age: number): number
}
var funcType6: funcType6 = function (name: string, age: number): number {
  return age
}

// 对于联合类型的函数，可以采用重载的方式
// 输入是number，输出也是number
// 输入是string,输出也是string
function getValue(value:number):number;
function getValue(value:string):string;
function getValue(value: string | number): string | number {
  return value
}

let a:number = getValue(1)
let b:string = getValue("1")