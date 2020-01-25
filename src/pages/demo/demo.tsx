import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class Demo extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  // TODO: 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项
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

  setTabBarBadge() {
    // TODO: 同wx.setTabBarBadge(Object object)基础库 1.9.0 开始支持，低版本需做兼容处理。为 tabBar 某一项的右上角添加文本
    Taro.setTabBarBadge({
      index: 0,
      text: '角'
    }).then((res) => console.log(res))
  }

  removeTabBarBadge() {
    // TODO: 同wx.removeTabBarBadge(Object object)基础库 1.9.0 开始支持，低版本需做兼容处理。移除 tabBar 某一项右上角的文本
    Taro.removeTabBarBadge({ index: 0 }).then((res) => console.log(res))
  }

  showTabBarRedDot() {
    // TODO: wx.showTabBarRedDot(Object object)基础库 1.9.0 开始支持，低版本需做兼容处理。显示 tabBar 某一项的右上角的红点
    Taro.showTabBarRedDot({ index: 0 }).then((res) => console.log(res))
  }

  hideTabBarRedDot() {
    // TODO: wx.hideTabBarRedDot(Object object)基础库 1.9.0 开始支持，低版本需做兼容处理。隐藏 tabBar 某一项的右上角的红点
    Taro.hideTabBarRedDot({ index: 0 }).then((res) => console.log(res))
  }

  setTabBarStyle() {
    // TODO: 同wx.setTabBarStyle(Object object)基础库 1.9.0 开始支持，低版本需做兼容处理。动态设置 tabBar 的整体样式
    Taro.setTabBarStyle({
      color: '#FF0000',
      selectedColor: '#00FF00',
      backgroundColor: '#0000FF',
      borderStyle: 'white'
    }).then((res) => console.log(res))
  }

  setTabBarItem() {
    // TODO: 同wx.setTabBarItem(Object object)基础库 1.9.0 开始支持，低版本需做兼容处理。动态设置 tabBar 某一项的内容，2.7.0 起图片支持临时文件和网络文件
    Taro.setTabBarItem({
      index: 0,
      text: 'text',
      iconPath: '',
      selectedIconPath: ''
    }).then((res) => console.log(res))
  }

  hideTabBar() {
    // TODO: 同wx.hideTabBar(Object object)基础库 1.9.0 开始支持，低版本需做兼容处理。隐藏 tabBar
    Taro.hideTabBar({ animation: true }).then((res) => console.log(res))
  }

  showTabBar() {
    // TODO: 同wx.showTabBar(Object object)基础库 1.9.0 开始支持，低版本需做兼容处理。显示 tabBar
    Taro.showTabBar({ animation: true }).then((res) => console.log(res))
  }

  render() {
    return (
      <View>
        <View>
          <Button size='mini' onClick={this.setTabBarBadge}>setTabBarBadge</Button>
          <Button size='mini' onClick={this.removeTabBarBadge}>removeTabBarBadge</Button>
          <Button size='mini' onClick={this.showTabBarRedDot}>showTabBarRedDot</Button>
          <Button size='mini' onClick={this.hideTabBarRedDot}>hideTabBarRedDot</Button>
          <Button size='mini' onClick={this.setTabBarStyle}>setTabBarStyle</Button>
          <Button size='mini' onClick={this.setTabBarItem}>setTabBarItem</Button>
          <Button size='mini' onClick={this.hideTabBar}>hideTabBar</Button>
          <Button size='mini' onClick={this.showTabBar}>showTabBar</Button>
        </View>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/view_page')}>视图容器</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/base_page')}>基础内容</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/form_page')}>表单组件</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/media_page')}>媒体组件</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/map_page')}>地图</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/components/webview_page')}>WebView</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/api/interaction_page')}>交互</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/api/navigate_page')}>页面导航</Button>
        <Button onClick={this.navigateToPage.bind(this, '/pages/demo/api/navigation_page')}>导航栏</Button>
      </View>
    )
  }

}
