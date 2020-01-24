import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class Demo extends Component {

  config: Config = {
    navigationBarTitleText: 'Demo'
  }

  /*
  TODO: 下面这样写会报错
  navigateTo(targetUrl: string) {
      Taro.navigateTo({ url: targetUrl })
  }
  /<Button onClick={this.navigateTo('view/view_page')}>Demo</Button>
  */

  navigateToPage(targetUrl) {
    Taro.navigateTo({ url: targetUrl })
  }

  render() {
    return (
      <View>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/view_page')}>视图容器</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/base_page')}>基础内容</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/form_page')}>表单组件</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/media_page')}>媒体组件</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/map_page')}>地图</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/webview_page')}>WebView</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/api/interaction_page')}>交互</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/api/navigate_page')}>导航</Button>
      </View>
    )
  }

}
