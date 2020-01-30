import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class MobXDemoPage extends Component {

  config: Config = {
    navigationBarTitleText: 'MobX Demo'
  }

  goPage(page) {
    Taro.navigateTo({
      url: `/pages/demo/mobx/${page}_page`
    })
  }

  render() {
    return (
      <View>
        <Button onClick={this.goPage.bind(this, 'use_context')}>useContext 示例</Button>
        <Button onClick={this.goPage.bind(this, 'use_local_store')}>useLocalStore 示例</Button>
        <Button onClick={this.goPage.bind(this, 'use_as_observable_source')}>useAsObservableSource 示例</Button>
        <Button onClick={this.goPage.bind(this, 'class')}>类组件示例</Button>
      </View>
    )
  }
}
