import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'

// TODO: inject 将 Provider 中设置的 store 提取到组件的 props 中，该 API 只适用于类组件
/*
@inject('counterStore')
等同于
@inject((stores, props) => ({
  counterStore: stores.counterStore
}))
*/
// 无论以何种方式使用 inject，其后的 observer 均不能省略。
/* 不要在 inject 中引用可观察对象，这将导致属性改变后页面不更新，比如：
// 错误
@inject((stores, props) => ({
  counter: stores.counterStore.counter
}))
// 正确
@inject((stores, props) => ({
  counterStore: stores.counterStore
}))
*/
@inject('counterStore')
@observer
export default class Index extends Component<any> {
  // 下面会报：
  // Property 'counterStore' does not exist on type 'Readonly<{}> & Readonly<{ children?: ReactNode; }>'.ts
  // export default class ClassPage extends Component {
  componentWillReact() {
    const { counterStore: { counter } } = this.props
    console.log('mobx store changed', counter)
  }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render() {
    const { counterStore: { counter } } = this.props
    return (
      <View>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

