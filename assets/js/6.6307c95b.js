(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_2-遇到多个构造器参数时要考虑用构建器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-遇到多个构造器参数时要考虑用构建器","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.遇到多个构造器参数时要考虑用构建器")]),t._v(" "),a("p",[t._v("静态工厂和构造器有共同的局限性：它们都不能很好的扩展到含有大量可选参数。")]),t._v(" "),a("p",[t._v("对于包含大量可选参数的情况，应该用哪种构造器或者静态方法来编写呢？程序员一向习惯采用重叠构造器（telescoping constructor）模式，在这种模式下，你提供了一个只有必要参数的构造器，一个有一个可选参数的构造器，一个有两个可选参数的构造器，依此类推，最后一个构造器包含所有构造参数。")]),t._v(" "),a("p",[t._v("下面是一个简单的实例化例子：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 可口可乐的包装营养成分标签含量")]),t._v("\nNutritionFacts  cocaCola  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("NutritionFacts")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("240")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("35")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("27")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这个构造器调用通常需要许多你本不想设置的参数，但你不得不为它们传递值。")]),t._v(" "),a("p",[t._v("一句话：**重叠构造器模式可行，但是当有许多参数时，客户端代码会很难编写，并且难以阅读。**如果读者想要知道哪些值是什么意思，必须很仔细的数着这些参数来探个究竟。如果客户端一不小心颠倒了两个参数的位置，编译器不会出错，但程序运行时会出现错误行为。")]),t._v(" "),a("p",[t._v("还有第二种代替方法：即"),a("code",[t._v("JavaBeans")]),t._v("模式，在这种模式下，调用一个无参构造器来创建对象，然后调用"),a("code",[t._v("setter")]),t._v("参数来设置每个必要的参数，和每个相关的可选参数。")]),t._v(" "),a("p",[t._v("这种模式弥补了重叠构造器模式的不足。说明白一点，就是创建实例很容易，代码读起来也很容易。")]),t._v(" "),a("p",[t._v("遗憾的是，"),a("code",[t._v("javaBeans")]),t._v("模式有着严重的缺点。因为构造过程被分到了几个调用中， "),a("strong",[t._v("在构造过程中"),a("code",[t._v("JavaBean")]),t._v("可能处于不一致的状态。")]),t._v(" 与此相关的另一点不足在于， "),a("strong",[t._v("JavaBeans 模式阻止了把类做成不可变的可能")]),t._v(" ，这就需要程序员付出额外的努力来确保它的线程安全。")]),t._v(" "),a("p",[t._v("幸运的是，还有第三种替代方法，既能保证像重叠构造器模式那样的安全性，也能保证像 JavaBeans 模式那么好的可读性。这就是"),a("code",[t._v("Builder")]),t._v("模式的一种形式。不直接生成想要的对象，而是让客户端利用所有必要的参数调用构造器（或者静态工厂），得到一个"),a("code",[t._v("builder")]),t._v("对象。然后客户端调用无参的 "),a("code",[t._v("build")]),t._v("方法来生成不可变的对象。这个"),a("code",[t._v("builder")]),t._v("是它构建的类的静态成员类。下面就是它的示例：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Builder Pattern")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("NutritionFacts")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" servingSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" servings"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" calories"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fat"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sodium"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" carbohydrate"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// Required parameters")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" servingSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" servings"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// Optional parameters - initialized to default values")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" calories "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fat "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sodium "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" carbohydrate "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" servingSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" servings"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servingSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" servingSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servings "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" servings"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Builder "),a("span",{attrs:{class:"token function"}},[t._v("calories")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            calories "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Builder "),a("span",{attrs:{class:"token function"}},[t._v("fat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fat "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Builder "),a("span",{attrs:{class:"token function"}},[t._v("sodium")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            sodium "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Builder "),a("span",{attrs:{class:"token function"}},[t._v("carbohydrate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            carbohydrate "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" NutritionFacts "),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("NutritionFacts")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("NutritionFacts")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Builder builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        servingSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servingSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        servings "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servings"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        calories "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calories"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fat "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fat"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        sodium "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sodium"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        carbohydrate "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("carbohydrate"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("注意 "),a("code",[t._v("NutritionFacts")]),t._v("是不可变的")]),t._v("，所有的默认参数值都单独放在一个地方。builder 的 setter 方法返回 builder 本身，以便可以把调用链接起来。下面就是客户端代码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("NutritionFacts cocaCola "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("NutritionFacts"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("240")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("calories")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sodium")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("35")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("carbohydrate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("27")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这样的客户端代码很容易编写，更为重要的是，易于阅读。 "),a("em",[t._v("builder 模式模拟了具名的可选参数")]),t._v(" ，就像 Ada 和 Python 中的一样。")]),t._v(" "),a("p",[t._v("builder 像个构造器一样，可以对其参数强加约束条件。 "),a("code",[t._v("build")]),t._v(" 方法可以检验这些约束条件。将参数从 builder 拷贝到对象中之后，"),a("strong",[t._v("并在对象域而不是 builder 域中对它们进行检验")]),t._v("，这一点很重要。如果违反了任何约束条件， "),a("code",[t._v("build")]),t._v(" 方法就应该抛出 "),a("code",[t._v("IllegalStateException")]),t._v(" 。异常的详细信息应该显示违反了哪个约束条件。")]),t._v(" "),a("p",[t._v("对多个参数强加约束条件的另一种方法是，用多个 setter 方法对某个约束条件必须持有的所有参数进行检查。如果该约束条件没有得到满足，setter 方法就会抛出 "),a("code",[t._v("IllegalArgumentsException")]),t._v(" 。这有个好处，就是一旦传递了无效的参数，立即就会发现约束条件失败，而不是等着调用 "),a("code",[t._v("build")]),t._v(" 方法。")]),t._v(" "),a("p",[t._v("与构造器相比，builder 模式的略微优势在于，builder 可以有多个可变（varargs）参数。构造器就像方法一样，只能有一个可变参数。因为 builder 利用单独的方法来设置每个参数，你想要多少个可变参数，它们就可以有多少个，知道每个 setter 方法都有一个可变参数。")]),t._v(" "),a("p",[t._v("Builder 模式十分灵活，可以利用单个 builder 构建多个对象。builder 的参数可以在创建对象期间进行调整，也可以随着不同的对象而改变。builder 可以自动填充某些域，例如每次创建对象时自动增加序列号。")]),t._v(" "),a("p",[t._v("设置了参数的 builder 生成了一个很好的抽象工厂（Abstract Factory）。换句话说，客户端可以将这样一个 builder 传给方法，使该方法能够为客户端创建一个或者多个对象。要使用这种用法，需要有个类型来表示 builder。只要一个泛型就能满足所有的 builder，无论它们在构建哪种类型的对象：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// A builder for objects of type T")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" T "),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意，可以声明"),a("code",[t._v("NutritionFacts.Builder")]),t._v("类来实现"),a("code",[t._v("Builder<NutritionFacts>")]),t._v("。")]),t._v(" "),a("p",[t._v("带有 Builder 实例的方法通常利用有限制的通配符类型（bounded wildcard type）来约束构建器的类型参数。例如， 下面就是构建每个节点的方法，它利用一个客户端提供的 Builder 实例来构建树：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Tree "),a("span",{attrs:{class:"token function"}},[t._v("buildTree")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Builder "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" nodeBuilder"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Builder 模式的确也有它自身的不足。")]),t._v(" 为了创建对象，必须先创建它的构建器。虽然创建构建器的开销在实践中可能不那么明显，但是在某些十分注重性能的情况下，可能就成问题了。Builder 模式还比重叠构造器更加冗长，因此它只有在很多参数的时候才使用，比如 4 个或者更多个参数。但是记住，将来你可能需要添加参数。如果一开始就使用构造器或者静态工厂，等到类需要多个参数时才添加构建器，就会无法控制，那些过时的构造器或者静态工厂显得十分不协调。因此，通常最好一开始就使用构建器。")]),t._v(" "),a("p",[t._v("简而言之，"),a("strong",[t._v("如果类的构造器或者静态工厂中具有多个参数，设计这种类时，Builder 模式就是种不错的选择")]),t._v("，特别是当大多数参数都是可选的时候。与使用传统的重叠构造器模式相比，使用 Builder 模式的客户端代码将更易于阅读和编写，构建器也比"),a("code",[t._v("JavaBeans")]),t._v("更加安全。")])])}],!1,null,null,null);e.options.__file="2.md";s.default=e.exports}}]);