import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView, Button } from '@tarojs/components'

export default class OpenPage extends Component {

  config: Config = {
    navigationBarTitleText: 'Open Api'
  }

  chooseAddress() {
    // TODO: 同wx.chooseAddress(Object object)基础库 1.1.0 开始支持，低版本需做兼容处理。
    // 调用前需要 用户授权 scope.address
    // 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
    Taro.chooseAddress({
      success(res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  }

  requestPayment() {
    // TODO: 同wx.requestPayment(Object object)发起微信支付
    Taro.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) { console.log(res) },
      fail(res) { console.log(res) }
    })
  }

  render() {
    return (
      <ScrollView>
        <Button onClick={this.chooseAddress}>chooseAddress</Button>
        <Button onClick={this.requestPayment}>requestPayment</Button>
      </ScrollView>
    )
  }
}
