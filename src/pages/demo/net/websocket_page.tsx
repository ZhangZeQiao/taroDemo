import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView, Button } from '@tarojs/components'

export default class WebSocketPage extends Component {

  congig: Config = {
    navigationBarTitleText: 'WebSocket'
  }

  connectSocket() {
    // TODO: 创建一个 WebSocket 链接。支持存在最多两个 WebSocket 链接，每次成功调用 Taro.connectSocket 会返回一个新的 SocketTask。
    Taro.connectSocket({
      url: 'ws://echo.websocket.org/echo',
      success: function () {
        console.log('connect success')
      }
    }).then(task => {
      task.onOpen(function () {
        console.log('onOpen')
        task.send({ data: 'xxx' })
      })
      task.onMessage(function (msg) {
        console.log('onMessage: ', msg)
        task.close({})
      })
      task.onError(function () {
        console.log('onError')
      })
      task.onClose(function (e) {
        console.log('onClose: ', e)
      })
    })
  }

  render() {
    return (
      <ScrollView>
        <Button onClick={this.connectSocket}>connectSocket</Button>
      </ScrollView>
    )
  }
}
