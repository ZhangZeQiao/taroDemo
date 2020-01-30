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
    const { counter, increment, decrement, incrementAsync } = store;

    return (
      <View>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default observer(UseLocalStorePage)
