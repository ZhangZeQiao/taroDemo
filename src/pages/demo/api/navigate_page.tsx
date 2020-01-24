import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView, Button } from '@tarojs/components'

export default class NavigatePage extends Component {

  config: Config = {
    navigationBarTitleText: '导航'
  }

  navigateTo() {
    /* TODO: 参考微信 wx.navigateTo(Object object)
    保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
    使用 wx.navigateBack 可以返回到原页面。
    小程序中页面栈最多十层。
    */
    // TODO: navigateTo 的url不能是做为tab的页面，要用 Taro.switchTab，如下就是错误的：
    // Taro.navigateTo({ url: '/pages/demo/demo' }).then(res => console.log(res))
    // 报错：navigateTo:fail can not navigateTo a tabbar page
    // TODO: 打开页面，最好用绝对路径 /pages/xxx/......
    // TODO: 要打开的页面必须要提前加入app.tsx中的config: Config中的pages属性中
    Taro.navigateTo({ url: '/pages/demo/components/base_page' }).then(res => console.log(res))
  }

  redirectTo() {
    /* TODO: 参考微信 wx.redirectTo(Object object)
    关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
    */
    Taro.redirectTo({ url: '/pages/demo/components/base_page' }).then(res => console.log(res))
  }

  switchTab() {
    /* TODO: 参考微信 wx.switchTab(Object object)
    跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    */
    Taro.switchTab({ url: '/pages/demo/demo' }).then(res => console.log(res))
  }

  navigateBack() {
    /* TODO: 参考微信 wx.navigateBack(Object object)
    关闭当前页面，返回上一页面或多级页面。
    可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
    */
    Taro.navigateBack({ delta: 2 }).then(res => console.log(res))
  }

  reLaunch() {
    /* TODO: 参考微信 wx.reLaunch(Object object)
    基础库 1.1.0 开始支持，低版本需做兼容处理。
    关闭所有页面，打开到应用内的某个页面，可以是tab页面
    */
    Taro.reLaunch({ url: '/pages/index/index' }).then(res => console.log(res))
  }

  getCurrentPages() {
    /* TODO: 获取当前的页面栈，决定需要返回几层。
    */
    Taro.navigateBack({ delta: Taro.getCurrentPages().length }).then(res => console.log(res + '---' + Taro.getCurrentPages().length))
  }

  render() {
    return (
      <ScrollView>
        <Button onClick={this.navigateTo}>navigateTo</Button>
        <Button onClick={this.redirectTo}>redirectTo</Button>
        <Button onClick={this.switchTab}>switchTab</Button>
        <Button onClick={this.navigateBack}>navigateBack</Button>
        <Button onClick={this.reLaunch}>reLaunch</Button>
        <Button onClick={this.getCurrentPages}>getCurrentPages</Button>
      </ScrollView>
    )
  }
}
