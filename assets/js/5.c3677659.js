(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_1-考虑用静态工厂方法代替构造器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-考虑用静态工厂方法代替构造器","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.考虑用静态工厂方法代替构造器")]),t._v(" "),s("p",[t._v("对于类而言，要想获得它的一个实例，最常用的方法就是提供一个公有的构造器。除此之外，还可以提供一个公有的"),s("em",[t._v("静态工厂方法")]),t._v("（static factory method），它只是一个返回类实例的静态方法。下面是一个来自"),s("code",[t._v("Boolean")]),t._v("的简单示例。这个方法将"),s("code",[t._v("boolean")]),t._v("基本类型值转换成了一个"),s("code",[t._v("Boolean")]),t._v("的对象引用：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Boolean "),s("span",{attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" b"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("  b "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" Boolean"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TRUE "),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FALSE"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意！本节中的静态工厂方法与设计模式中的工厂方法模式不同。")])]),t._v(" "),s("h2",{attrs:{id:"静态工厂方法有以下几大优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态工厂方法有以下几大优势","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态工厂方法有以下几大优势")]),t._v(" "),s("h3",{attrs:{id:"它有名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#它有名称","aria-hidden":"true"}},[t._v("#")]),t._v(" 它有名称")]),t._v(" "),s("p",[t._v("如果构造器的参数本身没有确切地描述正被返回的对象，那么具有适当名称的静态工厂会更容易使用，产生的客户端代码也更易于阅读。")]),t._v(" "),s("p",[t._v("例如，构造器  "),s("code",[t._v("BigInteger(int, int, Random)")]),t._v("返回的  "),s("code",[t._v("BigInteger")]),t._v("可能为素数，如果用名为  "),s("code",[t._v("BigInteger.probablePrime")]),t._v("的静态工厂方法来表示，显然更为清楚。")]),t._v(" "),s("h3",{attrs:{id:"不必在每次调用它们的时候都创建一个新对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不必在每次调用它们的时候都创建一个新对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 不必在每次调用它们的时候都创建一个新对象")]),t._v(" "),s("p",[t._v("这使得不可变类（实例不能被修改的类）可以使用预先构建好的实例，或者将构建好的实例缓存起来，进行重复利用，从而避免创建不必要的重复对象。"),s("code",[t._v("Boolean.valueOf(boolean)")]),t._v("方法说明了这项技术：它从来不创建对象。这种方法类似于  "),s("code",[t._v("Flyweight模式")]),t._v("（享元模式）。如果程序经常创建相同的对象，并且创建对象的代价很高，则这项技术可以极大地提升性能。")]),t._v(" "),s("p",[t._v("静态工厂方法能够为重复的调用返回相同的对象，这样有助于类总能严格控制在某个时刻哪些实例应该存在。这种类被称作  "),s("em",[t._v("实例受控的类")]),t._v(" （instance-controlled）。编写实例受控类有几个原因。实例受控使得类可以确保它是一个  "),s("code",[t._v("Singleton")]),t._v("（见第 3 条）或者是不可实例化的（见第 4 条）。它还使得不可变的类（见第 15 条）可以确保不会存在两个相等的实例，即当且仅当  "),s("code",[t._v("a==b")]),t._v("的时候才有  "),s("code",[t._v("a.equals(b)")]),t._v("为  "),s("code",[t._v("true")]),t._v("。如果类保证了这一点，它的客户端就可以使用  "),s("code",[t._v("==")]),t._v("操作符来代替"),s("code",[t._v("equals(Object)")]),t._v("方法，这样可以提升性能。枚举（ "),s("code",[t._v("enum")]),t._v("）类型（见第 30 条）保证了这一点。")]),t._v(" "),s("p",[t._v("这种模式即单例模式中的懒汉模式/饿汉模式（取决于类加载时是否完成初始化创建实例）")]),t._v(" "),s("h3",{attrs:{id:"它们可以返回原返回类型的任何子类型的对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#它们可以返回原返回类型的任何子类型的对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 它们可以返回原返回类型的任何子类型的对象")]),t._v(" "),s("p",[t._v("这样我们在选择返回对象的类时就有了更大的灵活性。比如"),s("code",[t._v("java.util.EnumSet")]),t._v("（见第 32 条）没有公有构造器，只有静态工厂方法。它们返回两种实现类之一，具体则取决于底层枚举类型的大小；如果它的元素有 64 个或者更少，就像大多数枚举类型一样，静态工厂方法就会返回一个  "),s("code",[t._v("RegularEnumSet")]),t._v("实例，用  "),s("code",[t._v("long")]),t._v("进行支持；如果枚举类型有 65 个或者更多元素，工厂就返回  "),s("code",[t._v("JumboEnumSet")]),t._v("实例，用  "),s("code",[t._v("long")]),t._v("数组进行支持。")]),t._v(" "),s("h3",{attrs:{id:"在创建参数化类型实例的时候，它们使代码变得更加简洁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在创建参数化类型实例的时候，它们使代码变得更加简洁","aria-hidden":"true"}},[t._v("#")]),t._v(" 在创建参数化类型实例的时候，它们使代码变得更加简洁")]),t._v(" "),s("p",[t._v("在调用参数化类的构造器时，即使类型参数很明显，也必须指明。这通常要求你接连两次提供类型参数：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("Map"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" m "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("随着类型参数变得越来越长，越来越复杂，这一冗长的说明也变得痛苦起来。但是有了静态工厂方法，编译器就可以替你找到类型参数。这被称作类型推导（type inference）。例如，假设 "),s("code",[t._v("HashMap")]),t._v("提供了这个静态工厂：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("K"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" V"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" HashMap"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("K"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" V"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("newInstance")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n     "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("   "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("K"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" V"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("你就可以用下面这句简洁的代码代替上面繁琐的声明：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("Map"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" m "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" HashMap"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("newInstance")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"静态工厂方法有以下几个缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态工厂方法有以下几个缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态工厂方法有以下几个缺点")]),t._v(" "),s("h3",{attrs:{id:"类如果不含有公有的或者受保护的构造器，就不能被子类化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类如果不含有公有的或者受保护的构造器，就不能被子类化","aria-hidden":"true"}},[t._v("#")]),t._v(" 类如果不含有公有的或者受保护的构造器，就不能被子类化")]),t._v(" "),s("p",[t._v("对于公有的静态工厂所返回的非公有类，也同样如此。它们也不能被实例化。但是这样也许会因祸得福，因为它鼓励程序员使用复合（composition），而不是继承（见第 16 条）")]),t._v(" "),s("h3",{attrs:{id:"它们与其他的静态方法实际上没有任何区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#它们与其他的静态方法实际上没有任何区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 它们与其他的静态方法实际上没有任何区别")]),t._v(" "),s("p",[t._v("在 API 文档中，它们没有像构造器那样在 API 文档中明确标识出来，因此，对于提供了静态工厂方法而不是构造器的类来说，要想查明如何实例化一个类，这是非常困难的。下面是静态工厂方法的一些惯用名称：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("valueOf")]),t._v("—— 不太严格地讲，该方法返回的实例与它的参数具有相同的值。这样的静态工厂方法实际上是类型转化方法。")]),t._v(" "),s("li",[s("code",[t._v("of")]),t._v("—— "),s("code",[t._v("valueOf")]),t._v("的一种更为简洁的替代，在 "),s("code",[t._v("EnumSet")]),t._v("（见第 32 条）中使用并流行起来。")]),t._v(" "),s("li",[s("code",[t._v("getInstance")]),t._v("—— 返回的实例是通过方法的参数来描述的，但是不能够说与参数具有同样的值。对于 "),s("code",[t._v("Singleton")]),t._v("来说，该方法没有参数，并返回唯一的实例。")]),t._v(" "),s("li",[s("code",[t._v("newInstance")]),t._v("—— 像 "),s("code",[t._v("getInstance")]),t._v("一样，但 "),s("code",[t._v("newInstance")]),t._v("能够确保返回的每个实例都与所有其他实例不同。")]),t._v(" "),s("li",[s("code",[t._v("getType")]),t._v("—— 像 "),s("code",[t._v("getInstance")]),t._v("一样，但是在工厂方法处于不同的类中的时候使用。 "),s("em",[t._v("Type")]),t._v(" 表示工厂方法所返回的对象类型。")]),t._v(" "),s("li",[s("code",[t._v("newType")]),t._v("—— 像 "),s("code",[t._v("newInstance")]),t._v("一样，但是在工厂方法处于不同的类中的时候使用。 "),s("em",[t._v("Type")]),t._v(" 表示工厂方法所返回的对象类型。")])]),t._v(" "),s("p",[t._v("简而言之，静态工厂方法和公有构造器都各有用处，我们需要理解它们各自的长处。静态工厂通常更加合适，因此切忌第一反应就是提供公有的构造器，而不先考虑静态工厂。")])])}],!1,null,null,null);e.options.__file="1.md";a.default=e.exports}}]);