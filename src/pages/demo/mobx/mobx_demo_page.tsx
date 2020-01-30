import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class MobXDemoPage extends Component {

  config: Config = {
    navigationBarTitleText: 'MobX Demo'
  }

  goPage(page) {
    Taro.navigateTo({
      url: `/pages/demo/mobx/${page}`
    })
  }

  render() {
    return (
      <View>
        <Button onClick={this.goPage.bind(this, 'use_local_store_page')}>useLocalStore 示例</Button>
        <Button onClick={this.goPage.bind(this, 'use_as_observable_source_page')}>useAsObservableSource 示例</Button>
        <Button onClick={this.goPage.bind(this, 'use_context_page')}>useContext 示例</Button>
        <Button onClick={this.goPage.bind(this, 'class_page')}>类组件示例</Button>
        <Button onClick={this.goPage.bind(this, 'static_rendering_page')}>StaticRendering 示例</Button>
      </View>
    )
  }
}
