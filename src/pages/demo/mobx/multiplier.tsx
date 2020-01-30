import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { useAsObservableSource, useLocalStore, observer } from '@tarojs/mobx'

/*
与 useLocalStore 的区别是，它将纯（不包含 getter 或方法）对象转换为 observable，主要使用场景为：
1、如果对象某个属性的值需经过复杂运算才能获得，可通过该方法进行包装，这样在组件的生命周期中该运算只需要运算一次。
2、一般情况下 useLocalStore 仅用于组件内部，
TODO: 如果 useLocalStore 中的对象需要依赖外部传递的属性，
那么可通过 useAsObservableSource 将这些属性进行转换，
而后在 useLocalStore 对象中进行引用，
TODO: 这样在外部属性改变时自动通知 useLocalStore 对象对变化进行响应，
比如：
*/

function Multiplier(props) {
  // 用作可观察的来源
  const observableProps = useAsObservableSource(props)
  const store = useLocalStore(() => ({
    counter: 1,
    get multiplied() {
      return observableProps.multiplier * store.counter
    },
    increment() {
      store.counter += 1
    }
  }))

  const { multiplier } = observableProps
  const { multiplied, counter, increment } = store

  // TODO: 此function return一个Component，可用于页面组件布局
  return (
    <View>
      <Text>multiplier({multiplier}) * counter({counter}) = {multiplied}</Text>
      <Button onClick={increment}>Increment Counter</Button>
    </View>
  )
}

/*
observer
TODO: 将组件设置为监听者，以便在可观察对象的值改变后触发页面的重新渲染。
*/
export default observer(Multiplier)
