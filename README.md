# Vue
### 生命周期  
![](https://segmentfault.com/img/bVEo3w?w=1200&h=2800)
![](https://segmentfault.com/img/bVEs9x?w=847&h=572)


最近在写东西的时候一直在纠结在生命周期的哪一个阶段来向后台请求数据：经过网上的学习，可以得出结论。一般情况下在created这个生命周期里请求数据，然后和dom一起渲染。但是如果说依赖dom去做一些操作name就在mounted里面做响应的处理。
参考自：
> [https://segmentfault.com/a/1190000008010666](https://segmentfault.com/a/1190000008010666)

### 积累
组件脚本中的data可以是一个返回Object对象的函数，也可以是一个对象的属性。

