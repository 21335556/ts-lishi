var num:any = 1;
num = true
num = "3"

var num2;  // 没有赋值操作，就会被认为任意值类型 等价于 var num2:any
num2 = 1;
num2 = true

// var b = 1; // 给变量赋值初始值的时候， 如果没有指定类型，根据和初始值倒推类型
// b = 2

var b;  // 没有给b赋初始值， 就是any   var b:any;
b = 1;
b = true;