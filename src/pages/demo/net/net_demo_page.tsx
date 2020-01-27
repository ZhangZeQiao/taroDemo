import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView, Button } from '@tarojs/components'

export default class NetDemoPage extends Component {

  congig: Config = {
    navigationBarTitleText: 'Net Demo'
  }

  navigateToPage(targetUrl) {
    Taro.navigateTo({ url: targetUrl })
  }

  render() {
    return (
      <ScrollView>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/net/websocket_page')}>WebSocket</Button>
      </ScrollView>
    )
  }
}
