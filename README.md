# t-entrust
便捷的事件委托代理

t-entrust 是封装了事件委托的一个简单插件，配合 `data-` 自定义属性就能够完成监听器的委托

## 好处
如果页面上有多个操作需要添加监听器(addEventListener)，那么就需要给多个 dom 绑定事件，如果这样做就会占用很大的内存，并且在 SPA 单页面应用中，没有在页面卸载的时候及时清除，会使内存积压过多。

如果使用事件委托，甚至就可以添加一个监听器来完成监听的操作
## 使用
在 html 中，使用了 `data-entrust` 来定义要监听的 dom，以及指定对应的操作
```javascript
// 通过 data-entrust 指定要操作的 dom
// data-entrust 的值表示你要做什么操作
<section id="wrap">
    <button data-entrust="copy">copy</button>
</sectioin>
```

上面例子表示：
- 首先给要监听的**父元素**定义 id
- 给 button 按钮添加了一个自定义属性，并赋值为 `copy`

添加监听器：

```javascript
import Entrust from './tentrust'

// 通过新建 Entrust 的实例，来设置要添加监听器的 dom 元素
// 此时还未添加监听器
let wrap = new Entrust('wrap')

// 使用 listen 给 dom 元素添加监听器
// 此时已经添加监听器
wrap.listen('click', e => {
    // e 是原生 $event

    // getName 通过传入 event，来获取当前事件的 handle
    // getName 返回 `data-entrust` 的值，或者返回 null
    let handleName = wrap.getName(e)

    if(handleName === 'copy') {
        // do something
    }
})
```

移除监听器：

```javascript
// 虽然上面写法看起来像原生 addEventListener
// 但是你仍然可以使用内嵌函数来销毁监听器
wrap.destory()
```

指定执行操作的 dom 标签：
```javascript
// html
<section id="wrap">
    <button data-entrust="copy">copy</button>
</section>

// js
let wrap = new Entrust('wrap').listen('click', e => {
    let handleName = wrap.getName(e, 'button')
    if(handleName === 'copy') {
        // do something
    }
})
```

上面通过使用 `getName`来指定了 `button` 标签，内部使用 `closest` 寻找这个标签的祖先元素，这样设置可以方便寻找设定的操作。

建议在使用 `getName` 的时候，指定标签名称。


## 注意
**目前**插件使用了 es6 的 `class` 方法，所以不经过 `bable` 打包的项目需要注意浏览器兼容的问题