// 没有确切定义返回值类型,运行的数组每一项都可以是任意类型
// function createArray(length:number,value:any):Array<any>{
//   let arr = []
//   for(var i=0;i<length;i++){
//     arr[i] = value
//   }
//   return arr;
// }
// createArray(3,1)

// 使用反省将其改造
// 不传的时候根据类型进行倒推
// 泛型可以用来帮助我们限定约束规范
function createArray<T>(length:number,value:T):Array<T>{
  let arr = []
  for(var i=0;i<length;i++){
    arr[i] = value
  }
  return arr;
}

// var strArry:string[] = createArray<string>(3,"1")
// var numArray:number [] = createArray(3,1)


// 接口当中采用泛型
interface ICreate{
  <T>(name:string,value:T):Array<T>
}

let func:ICreate;
func = function<T>(name:string,value:T):Array<T>{
  return []
}

var strArr:string [] =  func("张三",'str')