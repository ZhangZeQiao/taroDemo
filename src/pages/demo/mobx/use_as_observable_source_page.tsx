import Taro, { Component, Config, useState } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Multiplier from './multiplier'

export default class UseAsObservableSourcePage extends Component {
  config: Config = {
    navigationBarTitleText: 'useAsObservableSource 示例'
  }

  render() {
    const [multiplier, setMultiplier] = useState(0)
    return (
      <View>
        <Multiplier multiplier={multiplier} />
        <Button onClick={() => setMultiplier(current => current + 1)}>Idncrement Multiplier</Button>
      </View>
    )
  }
}

