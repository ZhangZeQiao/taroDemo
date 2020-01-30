import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'

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

