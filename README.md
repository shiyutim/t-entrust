# t-entrust

便捷的事件委托代理

t-entrust 是封装了事件委托的一个简单插件，配合 `data-` 自定义属性就能够完成监听器的委托

## 安装

```js
npm i -S t-entrust
```

## 使用

```html
<!-- html -->

<!-- 通过 data-entrust 指定要操作的 dom -->
<!-- data-entrust 的值表示你要做什么操作 -->
<section id="wrap">
	<button data-entrust="copy">copy</button>
</sectioin>
```

```js
// js
import TEntrust from "t-entrust"

let wrap = new TEntrust("wrap") // 使用 wrap 而不是 #wrap
```

上面例子表示：

-   首先给要监听的**父元素**定义 id
-   给 button 按钮添加了一个自定义属性，并赋值为 `copy`

```js
let wrap = new TEntrust("wrap")
// listen 第一个参数为要监听的事件
// 第二个参数为 回调函数，该回调函数的参数为默认的 event
// 通过 getName函数 来获取响应的操作
// getName 第一个参数为 event，第二个参数为设置监听的事件标签名
// 并返回设置了 data-entrust 的值
wrap.listen("click", e => {
	let copy = wrap.getName(e, "button")
	// do somethings
})
```

 对于经常使用的监听方式，如：click ，默认提供了几个函数可以简化操作：

-   click
-   mousemove
-   scroll

```js
let wrap = new TEntrust("wrap")
wrap.click(e => {
	// do something
})
```

移除监听器：

```js
wrap.destroy()
```
