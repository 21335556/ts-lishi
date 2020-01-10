// 使用枚举可以定义一些有名字的数据常量
enum Days{
  Sun=3,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

console.log(Days.Sun) // 0
console.log(Days.Sat) // 6

console.log(Days) // 美剧类型会被编译成一个双向映射的对象
console.log(Days[3] === "Sun")