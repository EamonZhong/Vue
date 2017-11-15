# Vue
### 生命周期  
![](https://segmentfault.com/img/bVEo3w?w=1200&h=2800)
![](https://segmentfault.com/img/bVEs9x?w=847&h=572)


最近在写东西的时候一直在纠结在生命周期的哪一个阶段来向后台请求数据：经过网上的学习，可以得出结论。一般情况下在created这个生命周期里请求数据，然后和dom一起渲染。但是如果说依赖dom去做一些操作name就在mounted里面做响应的处理。
参考自：
> [https://segmentfault.com/a/1190000008010666](https://segmentfault.com/a/1190000008010666)

### 积累
组件脚本中的data可以是一个返回Object对象的函数，也可以是一个对象的属性。
组件切换可以用component标签与组件绑定动态显示组件，通过绑定：is来显示对应的组件
路由的使用可以使用动态的路由，而不依赖于是否写完了所有页面。
使用Element 的表格组件的时候 会出现表头和表内容对不齐的情况。需要重新覆盖原先的样式
