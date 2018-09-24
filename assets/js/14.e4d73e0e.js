(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{172:function(e,_,l){"use strict";l.r(_);var s=l(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,_=e.$createElement,l=e._self._c||_;return l("div",{staticClass:"content"},[l("h1",{attrs:{id:"_9-覆盖-equals-时总要覆盖-hashcode"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_9-覆盖-equals-时总要覆盖-hashcode","aria-hidden":"true"}},[e._v("#")]),e._v(" 9.覆盖 equals 时总要覆盖 hashCode")]),e._v(" "),l("p",[l("strong",[e._v("在每个覆盖了 equals 方法的类中，也必须覆盖 hashCode 方法。")]),e._v(" 如果不这样做就会违反 Object.hashCode 的通用约定，从而导致该类无法结合所有基于散列的集合一起正常运作，这样的集合包括 HashMap、HashSet、HashTable。")]),e._v(" "),l("p",[e._v("相等的对象必须具有相等的散列码（hash code）。")]),e._v(" "),l("p",[e._v("书中给出了编写 hashCode 的方法：")]),e._v(" "),l("ol",[l("li",[e._v("把某个非 0 的常数值，比如说 17，保存在一个名为 result 的 int 类型的变量中。")]),e._v(" "),l("li",[e._v("对于对象中的每个关键域 f（指 equals 方法中涉及的每个域），完成以下步骤：\n"),l("ol",[l("li",[e._v("为该域计算 int 类型的散列码 c：\n"),l("ol",[l("li",[e._v("如果该域是 boolean 类型，则计算"),l("code",[e._v("(f ? 1 : 0)")]),e._v("。")]),e._v(" "),l("li",[e._v("如果该域是 byte、char、short、或者 int 类型，则计算"),l("code",[e._v("(int)f")]),e._v("。")]),e._v(" "),l("li",[e._v("如果该域是 long 类型，则计算"),l("code",[e._v("(int)(f ^ (f >>> 32))")]),e._v("。")]),e._v(" "),l("li",[e._v("如果该域是 float 类型，则计算"),l("code",[e._v("Float.floatToIntBits(f)")]),e._v("。")]),e._v(" "),l("li",[e._v("如果该域是 double 类型，则计算"),l("code",[e._v("Double.doubleToLongBits(f)")]),e._v("，然后按照步骤 2.1.3，为得到的 long 类型计算散列码。")]),e._v(" "),l("li",[e._v("如果该域是一个对象引用，并且该域的 equals 方法通过递归地调用 equals 的方式来比较这个域，则同样为这个域递归地调用 hashCode。如果需要更复杂的比较，则为这个域计算一个“范式（canonical representation）”，然后针对这个范式调用 hashCode。如果这个域的值为 null，则返回 0（或者其他某个常数，但通常是 0）。")]),e._v(" "),l("li",[e._v("如果该域是一个数组，则要把每一个元素当做单独的域来处理。也就是说，递归地应用上述规则，对每个重要的元素计算一个散列码，然后根据步骤 2.2 中的做法把这些散列值组合起来。如果数组域中的每个元素都很重要，可以利用 Arrays.hashCode 方法。")])])]),e._v(" "),l("li",[e._v("按照下面的公式，把步骤 2.1 中计算得到的散列码 c 合并到 result 中："),l("code",[e._v("result = 31 * result + c;")]),e._v(" （之所以选择 31，是因为它是一个奇素数。如果乘数是偶数，并且乘法溢出的话，信息就会丢失，因为与 2 相乘等价于位移运算。使用素数的好处并不很明显，但是习惯上都使用素数来计算散列结果。31 有个很好的特性，即用位移和减法来代替乘法，可以得到更好的性能，"),l("code",[e._v("31 * i == (i << 5) - i")]),e._v("。现代的 VM 可以自动完成这种优化。）")]),e._v(" "),l("li",[e._v("返回 result。")]),e._v(" "),l("li",[e._v("写完了 hashCode 方法之后要问问自己“相等的实例是否都具有相等的散列码”。")])])])])])}],!1,null,null,null);t.options.__file="9.md";_.default=t.exports}}]);