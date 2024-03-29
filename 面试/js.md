#  面试知识点汇总：JS

参考自:
- https://juejin.im/post/6844904070579240974#heading-15

#  面试知识点汇总：JS

参考自:
- https://juejin.im/post/6844904070579240974#heading-15

## Q：原型链

|   对象   |     属性      |    属性名    | 描述                                                  |
| :------: | :-----------: | :----------: | ----------------------------------------------------- |
| 构造函数 |   prototype   | 显式原型属性 | 函数的prototype原型属性 指向 原型对象，默认为空Object |
|   实例   | \_\_proto\_\_ | 隐式原型属性 | 在实例化创建时产生，值等于构造函数的prototype的值     |

Ep:

instance1.\_\_proto\_\_ = instance1.construtor.prototype = instance2

> 引擎创建了Object.prototype，Function.prototype
> 
> person.\_\_proto\_\_ => Function.\_\_proto\_\_=> Object.\_\_proto\_\_=> null

**由\_\_proto\_\_属性组成的链，就叫做原型链**

那么，原型链的主要作用是什么？
- 实现继承：如果没有原型链，无法关联每个对象。
- 属性查找：先从当前实例对象上查找，要是没找到，沿\_\_proto\_\_往上查找
- 实例类型判断：判断实例

## this指向
1. 默认绑定：全局环境中，this默认绑定到window。


2. 隐式绑定：一般地，被直接对象所包含的函数调用时，也称为方法调用，this隐式绑定到该直接对象。


3. 显式绑定：通过call()、apply()、bind()方法把对象绑定到this上，叫做显式绑定。

4. new 绑定：new关键字绑定

## 继承

1. 原型链继承		
2. 构造继承		
3. 实例继承
4. 拷贝继承
5. 组合继承（常用）
6. 寄生组合继承（常用）
  
常用的两种：

- 组合继承：
```js
function Child3 (name) {
    Person.call(this, name) // 借用父类构造函数
}
Child3.prototype = new Person(); // 原型链继承
let ins3 = new Child3('child3')

ins3 instanceof Person // true

Child3name: "child3"
call: ƒ ()
__proto__: Person
    name: undefined
    call: ƒ ()
    __proto__: 
        age: 20
        boy: true

```

- 寄生组合式继承：
```js
// 寄生
function content (obj) {
    function F () {}
    F.prototype = obj
    return new F()
}

let con = content(Person.prototype) // con为F实例
// F实例原型继承了父类函数的原型

// 组合
function Child6 () {
    Person.call(this) // 继承构造函数
}// 解决组合式两次调用构造函数的问题

// 重点
Child6.prototype = con // 继承con实例 - 寄生创造的fn
con.construtor = Child6 // 修复实例
let ins6 = new Child6() // Child6实例 继承了构造函数属性，父类实例，con的函数属性


// 第二种写法
function inherits(Child, Parent) {
	// 没有像组合继承那样 new Parent,而是通过原型对象来创建一个新的对象
	var prototype = Object.create(Parent.prototype);
  // {} __proto__ 是Parent的原型对象

	// 重新设定引用，Child而非Parent或其他

  // {}.contructor = Child
	prototype.contructor = Child;

  // 
	Child.prototype = prototype;
}

inherits(Child, Parent);
```

## new的实质
调用构造函数，初始化对象，将原型对象绑定到\_\_proto\_\_

1. 创建一个新对象;
2. 将构造函数的作用域赋给新对象(因此 this 就指向了这个新对象);
3. 执行构造函数中的代码(为这个新对象添加属性);
4. 返回新对象。
5. 将构造函数的prototype关联到实例的__proto__

## Q：基本数据类型和引用数据类型在内存上有什么区别？

|   类型   |  栈内存  | 堆内存 |
| :------: | :------: | :----: |
| 基本类型 |  存储值  |   x    |
| 引用类型 | 存储内存地址 | 存储值 |

基本类型：存储在栈内存中，因为基本类型的大小是固定的。

引用类型：存储在堆内存中，因为引用类型的大小不固定，栈内存存储内存地址

## Q：typeof 和 instanceof 有什么区别

1. typeof(a) 用于返回值的类型

2. instanceof判断对象是否是目标实例,根据\_\_proto\_\_向上查找。

## Q：toString 和 valueOf 有什么区别

在 Object 中存在这个两个方法，继承Object的对象可以重写方法。这两个方法主要用于隐式转换

```js
1 + '1' // 11 ：整型 1 被转换成字符串 '1'，变成了 '1' + '1' = '11'
2 * '3' // 6  ：字符串 '3' 被转换成整型 3 ，变成了 2 * 3 = 6
```

当这两个函数同时存在时候，会先调用 **valueOf** ，若返回的不是原始类型，那么会调用 **toString** 方法，如果这时候 **toString** 方法返回的也不是原始数据类型，

那么就会报错:**TypeError: Cannot convert object to primitive value**

## Q:垃圾回收机制

为什么需要垃圾回收：因为对象需要占用内存，而内存资源是有限的。

js 会周期性的对不在使用的对象销毁，释放内存，关键点就在于怎么识别哪些对象是垃圾。

垃圾对象：对象没有被引用，或者几个对象形成循环引用，但是根访问不到他们，这些都是可回收的垃圾。

垃圾回收的两种机制：标记清除和引用计数

### 标记清除法
垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记，然后，它会去掉环境中的变量以及被环境中的变量引用的标记，而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。

最后。垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收他们所占用的内存空间。

比如说函数中声明了一个变量，就做一个标记，当函数执行完成，退出执行栈，这个变量的标记就变成已使用完。

目前主流浏览器采用的是这个策略

### 引用计数
跟踪每个值被引用的次数，声明一个变量后，这个变量每被其他变量引用一次，就加 1 ，如果变量引用释放了，就减 1，当引用次数为 0 的时候，对象就被清理。但这个有个循环引用的弊端，所以应用的比较少。

### 垃圾收集的性能优化

1. 分代回收，对象分成两组，新生带、老生带，
2. 增量回收
3. 空闲时间回收

### 编码可以做的优化

1. 避免重复创建对象。
2. 在适当的时候解除引用，是为页面获的更好性能的一个重要方式。
3. 全局变量什么时候需要自动释放内存空间则很难判断，因此在开发中，需要尽量避免使用全局变量。


## Q：原型链

|   对象   |     属性      |    属性名    | 描述                                                  |
| :------: | :-----------: | :----------: | ----------------------------------------------------- |
| 构造函数 |   prototype   | 显式原型属性 | 函数的prototype原型属性 指向 原型对象，默认为空Object |
|   实例   | \_\_proto\_\_ | 隐式原型属性 | 在实例化创建时产生，值等于构造函数的prototype的值     |

Ep:

instance1.\_\_proto\_\_ = instance1.construtor.prototype = instance2

> 引擎创建了Object.prototype，Function.prototype
> 
> person.\_\_protp\_\_ => Function.\_\_protp\_\_=> Object.\_\_protp\_\_=> null

**由\_\_protp\_\_属性组成的链，就叫做原型链**

那么，原型链的主要作用是什么？
- 实现继承：如果没有原型链，无法关联每个对象。
- 属性查找：先从当前实例对象上查找，要是没找到，沿\_\_proto\_\_往上查找
- 实例类型判断：判断实例

## Q：基本数据类型和引用数据类型在内存上有什么区别？

|   类型   |  栈内存  | 堆内存 |
| :------: | :------: | :----: |
| 基本类型 |  存储值  |   x    |
| 引用类型 | 存储内存地址 | 存储值 |

基本类型：存储在栈内存中，因为基本类型的大小是固定的。

引用类型：存储在堆内存中，因为引用类型的大小不固定，栈内存存储内存地址

## Q：typeof 和 instanceof 有什么区别

1. typeof(a) 用于返回值的类型

2. instanceof判断对象是否是目标实例,根据\_\_proto\_\_向上查找。

## Q：toString 和 valueOf 有什么区别

在 Object 中存在这个两个方法，继承Object的对象可以重写方法。这两个方法主要用于隐式转换

```js
1 + '1' // 11 ：整型 1 被转换成字符串 '1'，变成了 '1' + '1' = '11'
2 * '3' // 6  ：字符串 '3' 被转换成整型 3 ，变成了 2 * 3 = 6
```

当这两个函数同时存在时候，会先调用 **valueOf** ，若返回的不是原始类型，那么会调用 **toString** 方法，如果这时候 **toString** 方法返回的也不是原始数据类型，

那么就会报错:**TypeError: Cannot convert object to primitive value**

## Q:垃圾回收机制

为什么需要垃圾回收：因为对象需要占用内存，而内存资源是有限的。

js 会周期性的对不在使用的对象销毁，释放内存，关键点就在于怎么识别哪些对象是垃圾。

垃圾对象：对象没有被引用，或者几个对象形成循环引用，但是根访问不到他们，这些都是可回收的垃圾。

垃圾回收的两种机制：标记清除和引用计数

### 标记清除法
垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记，然后，它会去掉环境中的变量以及被环境中的变量引用的标记，而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。

最后。垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收他们所占用的内存空间。

比如说函数中声明了一个变量，就做一个标记，当函数执行完成，退出执行栈，这个变量的标记就变成已使用完。

目前主流浏览器采用的是这个策略

### 引用计数
跟踪每个值被引用的次数，声明一个变量后，这个变量每被其他变量引用一次，就加 1 ，如果变量引用释放了，就减 1，当引用次数为 0 的时候，对象就被清理。但这个有个循环引用的弊端，所以应用的比较少。

### 垃圾收集的性能优化

1. 分代回收，对象分成两组，新生带、老生带，
2. 增量回收
3. 空闲时间回收

### 编码可以做的优化

1. 避免重复创建对象。
2. 在适当的时候解除引用，是为页面获的更好性能的一个重要方式。
3. 全局变量什么时候需要自动释放内存空间则很难判断，因此在开发中，需要尽量避免使用全局变量。
