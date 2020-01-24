import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView, Button } from '@tarojs/components'

export default class InteractionPage extends Component {

  config: Config = {
    navigationBarTitleText: '交互'
  }

  showToast() {
    Taro.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
      .then(res => console.log(res))
  }

  hideToast() {
    Taro.hideToast()
  }

  showLoading() {
    Taro.showLoading({
      title: 'loading'
    })
      .then(res => console.log(res))
  }

  hideLoading() {
    Taro.hideLoading()
  }

  showModal() {
    // 注意：无论用户点击确定还是取消，Promise 都会 resolve。
    Taro.showModal({
      title: 'xxx',
      content: 'hello world',
    })
      .then(res => console.log(res.confirm, res.cancel))
    /* success 返回参数说明：
      TODO:
      参数值	类型	说明
      confirm	Boolean	为 true 时，表示用户点击了确定按钮
      cancel	Boolean	为 true 时，表示用户点击了取消 */
  }

  showActionSheet() {
    // 注意：当用户点击选项时 Promise 会 resolve，而当用户点击取消或蒙层时，Promise 会 reject。
    Taro.showActionSheet({
      itemList: ['a', 'b', 'c']
    })
      .then(res => console.log(res.errMsg, res.tapIndex))
      .catch(err => console.log(err.errMsg))
    /* success 返回参数说明：
      TODO:
      参数值	类型	说明
      tapIndex	Number	用户点击的按钮，从上到下的顺序，从 0 开始 */
  }

  render() {
    return (
      <ScrollView>
        <Button onClick={this.showToast}>showToast</Button>
        <Button onClick={this.hideToast}>hideToast</Button>
        <Button onClick={this.showLoading}>showLoading</Button>
        <Button onClick={this.hideLoading}>hideLoading</Button>
        <Button onClick={this.showModal}>确认弹窗：showModal</Button>
        <Button onClick={this.showActionSheet}>选择弹窗：showActionSheet</Button>
      </ScrollView>
    )
  }
}
