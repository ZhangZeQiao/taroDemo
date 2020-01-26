import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/demo/demo',
      'pages/demo/components/view_page',
      'pages/demo/components/base_page',
      'pages/demo/components/form_page',
      'pages/demo/components/media_page',
      'pages/demo/components/map_page',
      'pages/demo/components/webview_page',
      'pages/demo/api/interaction_page',
      'pages/demo/api/navigate_page',
      'pages/demo/api/navigation_page',
      'pages/demo/api/open_page',
      'pages/mine/mine'
    ],
    // 微信小程序接口权限相关设置，微信客户端 7.0.0 及以上版本支持
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于小程序位置接口的效果展示'
      }
    },
    // 申明需要后台运行的能力，类型为数组。目前支持以下项目：audio: 后台音乐播放
    requiredBackgroundModes: ['audio'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#f00',
      backgroundColor: '#f0f0f0',
      position: 'bottom',
      list: [
        {
          pagePath: 'pages/index/index',
          text: 'index',
          iconPath: './assets/images/taro_logo_white.png',
          selectedIconPath: './assets/images/taro_logo.png'
        },
        {
          pagePath: 'pages/demo/demo',
          text: 'demo',
          iconPath: './assets/images/taro_logo_white.png',
          selectedIconPath: './assets/images/taro_logo.png'
        },
        {
          pagePath: 'pages/mine/mine',
          text: 'mine',
          iconPath: './assets/images/taro_logo_white.png',
          selectedIconPath: './assets/images/taro_logo.png'
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
