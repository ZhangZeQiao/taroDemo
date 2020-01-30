import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import { useLocalStore, observer } from '@tarojs/mobx'

class UseLocalStorePage extends Component {

  config: Config = {
    navigationBarTitleText: 'useLocalStore 示例'
  }

  render() {
    const store = useLocalStore(() => ({
      counter: 0,
      increment() {
        store.counter++
      },
      decrement() {
        store.counter--
      },
      incrementAsync() {
        setTimeout(() => store.counter++, 1000)
      }
    }))

    // TODO: 品一品，仔细品一品
    // TODO: es6解构赋值
    /*
    ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
    以前，为变量赋值，只能直接指定值。
    let a = 1;
    let b = 2;
    let c = 3;
    ES6 允许写成下面这样。
    let [a, b, c] = [1, 2, 3];
    */
    // const {a,b,c} = 一个带有 a,b,c 的 object
    /*
    const origin = {
        a:1,
        b:2,
        c:3
    }
    const {a,b,c} = origin
    console.log(a)
    console.log(b)
    console.log(c)
    */
    const { counter, increment, decrement, incrementAsync } = store;

    return (
      <View>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )

    /*
不要在 JSX 中对可观察对象进行引用，比如：
// 错误，在小程序中值改变后将无法触发重新渲染
const { counterStore } = this.props
return (
  <Text>{counterStore.counter}</Text>
)
// 正确
const { counterStore: { counter } } = this.props
return (
  <Text>{counter}</Text>
)
这是因为 @tarojs/mobx 通过监听组件的 render（小程序编译后为 _createData）方法来触发更新；
在小程序中，JSX 的代码会被编译到 wxml 文件中，此时对可观察对象的引用（比如：counterStore.counter）早已脱离了 @tarojs/mobx 的监控，
故此对该属性的更改并不会触发更新操作。
    */
  }
}

// TODO: 将对象转换为 observable 对象，其中 getter 会被转换为 computed 属性，方法会与 store 进行绑定并自动执行 mobx transactions
export default observer(UseLocalStorePage)
