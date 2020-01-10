// 创建Person类
class Person{
  private name="张三"
  protected age=18
  say(){
    console.log("我的名字是"+this.name+",我的年龄为："+this.age)
  }
}

// 创建Person实例
var p = new Person()
// p.say()
// private属性之恶能在类的内部进行访问
// console.log(p.name) // 当一个类成员没有修饰的时候，外界是可以访问的，默认就是public进行修饰


// 创建child子类
// 一旦父类将属性定义成私有的之后,子类就不可以进行访问
// 父类的属性定义成保护之后,可以在子类里进行访问
class Child extends Person{
  callParent(){
    console.log(super.age)
    super.say()
  }
  static test(){
    console.log("test")
  }
}

var c = new Child()
// c.callParent()
// console.log(c.age) // 子类继承了父类,但是没有办法直接获取到父类私有的属性或者受保护的属性
// console.log(c.say()) // 子类继承了父类,子类就可以访问父类公开的属性或方法


console.log(Child.test()) // 类的静态方法里,是不允许用this