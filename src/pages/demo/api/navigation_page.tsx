import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView, Button } from '@tarojs/components'

export default class NavigationPage extends Component {

  config: Config = {
    navigationBarTitleText: '导航栏'
  }

  setNavigationBarTitle() {
    // TODO: 动态设置当前页面的标题。使用方式同 wx.setNavigationBarTitle，
    Taro.setNavigationBarTitle({ title: '修改title' }).then((res) => console.log(res))
  }

  showNavigationBarLoading() {
    // TODO: 在当前页面显示导航条加载动画。
    Taro.showNavigationBarLoading()
  }

  hideNavigationBarLoading() {
    // TODO: 隐藏导航条加载动画。
    Taro.hideNavigationBarLoading()
  }

  setNavigationBarColor() {
    // TODO: 设置页面导航条颜色。使用方式同 wx.setNavigationBarColor
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    }).then((res) => console.log(res))
  }

  render() {
    return (
      <ScrollView>
        <Button onClick={this.setNavigationBarTitle}>setNavigationBarTitle</Button>
        <Button onClick={this.showNavigationBarLoading}>showNavigationBarLoading</Button>
        <Button onClick={this.hideNavigationBarLoading}>hideNavigationBarLoading</Button>
        <Button onClick={this.setNavigationBarColor}>setNavigationBarColor</Button>
      </ScrollView>
    )
  }
}
