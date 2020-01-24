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

  navigateToViewPage() {
    Taro.navigateTo({ url: 'components/view_page' })
  }

  navigateToBasePage() {
    Taro.navigateTo({ url: 'components/base_page' })
  }

  navigateToFormPage() {
    Taro.navigateTo({ url: 'components/form_page' })
  }

  navigateToMediaPage() {
    Taro.navigateTo({ url: 'components/media_page' })
  }

  navigateToMapPage() {
    Taro.navigateTo({ url: 'components/map_page' })
  }

  navigateToWebViewPage() {
    Taro.navigateTo({ url: 'components/webview_page' })
  }

  render() {
    return (
      <View>
        <Button onClick={this.navigateToViewPage}>视图容器</Button>
        <Button onClick={this.navigateToBasePage}>基础内容</Button>
        <Button onClick={this.navigateToFormPage}>表单组件</Button>
        <Button onClick={this.navigateToMediaPage}>媒体组件</Button>
        <Button onClick={this.navigateToMapPage}>地图</Button>
        <Button onClick={this.navigateToWebViewPage}>WebView</Button>
      </View>
    )
  }


}
