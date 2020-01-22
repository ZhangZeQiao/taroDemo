// TODO: 不能只写 import { Component } from '@tarojs/taro' 要最先引入 Taro
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

// TODO: 写这个是为了比如this.state.date调用时不报错
interface IState {
    date: Date
}

export default class Clock extends Component<{}, IState> {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        // TODO: 虽然 this.props 由 Taro 本身设置以及 this.state 具有特殊的含义，
        // 但如果需要存储不用于视觉输出的东西，则可以手动向类中添加其他字段。
        // 如果你不在 render() 中使用某些东西，它就不应该在状态中。
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        // setState() 函数是唯一能够更新 this.state 的地方
        // 状态更新一定是异步的
        // 因为 this.state 和 props 一定是异步更新的，所以你不能在 setState 马上拿到 state 的值
        // 如果要监听拿到 state 的值，正确的做法是，在 setState 的第二个参数传入一个 callback
        // Taro 可以将多个 setState() 调用合并成一个调用来提高性能。
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <View>
                <Text> Hello World! </Text>
                <Text> {'\n'} </Text>
                <Text>现在的时间是：{this.state.date.toLocaleTimeString()}</Text>
            </View>
        )
    }
}