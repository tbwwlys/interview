- vue2 的生命周期
    create阶段
    beforeCreate 创建前data和methods还未初始化
    created 创建完毕，此时data 中有值，还未挂载
    mount阶段
    beforeMounted vue实例挂载前，此时可以想服务器端请求数据
    Mounted vue实例挂载完毕，此时可以操作dom节点
    update阶段 当vue实例中data数据发生改变是触发
    beforeUpdate：更新前
    Updated： 更新后
    destroy：摧毁
    beforeDestroy：摧毁前，此时可以手动结束一些方法
    Destroyed: 摧毁后
- vue3 生命周期
    setup 阶段：在beforeCreate和Created之前执行，初始化data 和 methods
    onMount 阶段：挂载组件到dom节点
    onBeforeMount阶段：组件挂载之前执行的函数
    onMounted 阶段：组件挂在之后执行的函数
    update阶段：当组件中的data发生变化时，触发组件的重新渲染
    onBeforeUpdate: 组件更新前执行的函数
    onUpdate: 组件更新后执行的函数
    unmounted 阶段：vue实例被销毁
    onBeforeUnmount 阶段：vue实例被销毁前执行的函数
    onUnmounted 阶段：vue实例被销毁后执行的函数

- beforeCreate： 初始化生命周期和事件，data还未初始化，此时vm还无法访问到data中的数据和methods中的方法
- created： 初始化：数据监测和数据代理，此时vm可以访问到data中的数据和methods中的方法
- beforeMounted： vue开始解析模板，生成虚拟dom到内存中，此时页面呈现的是未经编译的DOM结构，所有dom操作都不奏效
- mounted： 将内存中的虚拟dom转化为真实dom插入到页面中，此时页面呈现的是经过编译后的DOM，对DOM的操作都有效，至此初始化过程结束，一般在此进行：开启定时器，发送网络请求，订阅消息，绑定自定义事件等初始化操作
- beforeUpdate：此时数据是新的但页面是旧的，页面尚未保持同步，生成新的虚拟dom，随后与旧的虚拟dom进行比较，最终完成页面的更新：即完成model -> view的更新
- updated：此时页面和数据都是新的，页面和数据保持同步
- beforeDestroy: vm中所有的data method 指令等等都处于可用状态，马上要执行销毁过程，一般在此阶段：关闭定时器，取消订阅消息，解绑自定义事件等收尾操作
- destroyed：   







