import Taro, { Component, Config } from '@tarojs/taro'
import { WebView } from '@tarojs/components'

export default class WebViewPage extends Component {

  config: Config = {
    navigationBarTitleText: 'WebView'
  }

  // TODO: 已经认证的企业号和服务号才可以绑定小程序使用web-view
  render() {
    return (
      <WebView src='https://www.baidu.com/' />
    )
  }
}
