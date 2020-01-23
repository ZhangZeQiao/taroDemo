import Taro, { Component, Config, Nodes } from '@tarojs/taro'
import { ScrollView, Text, Icon, View, Button, Progress, RichText } from '@tarojs/components'

interface IState {
    contents: any,
    contentsLen: number,
    nodes: Nodes
}

export default class BasePage extends Component<{}, IState> {

    state = {
        contents: [],
        contentsLen: 0,
        nodes: [{
            name: 'div',
            attrs: {
                class: 'div_class',
                style: 'line-height: 60px; color: red;'
            },
            children: [{
                type: 'text',
                text: 'Hello World!'
            }]
        }]
    }

    config: Config = {
        navigationBarTitleText: '基础内容'
    }

    add = () => {
        this.setState(prev => {
            const cot = prev.contents.slice()
            cot.push({ text: 'hello world' })
            return {
                contents: cot,
                contentsLen: cot.length
            }
        })
    }

    remove = () => {
        this.setState(prev => {
            const cot = prev.contents.slice()
            cot.pop()
            return {
                contents: cot,
                contentsLen: cot.length
            }
        })
    }

    render() {
        return (
            <ScrollView>
                <Text>《图标：Icon》</Text>
                <View>
                    <Icon size='20' type='success_no_circle' />
                    <Icon size='20' type='warn' />
                    <Icon size='20' type='success' />
                    <Icon size='20' type='download' />
                    <Icon size='20' type='clear' color='red' />
                    <Icon size='20' type='search' />
                </View>
                <View>
                    <Icon size='60' type='success' />
                    <Icon size='60' type='info' />
                    <Icon size='60' type='warn' color='#ccc' />
                    <Icon size='60' type='warn' />
                    <Icon size='60' type='waiting' />
                </View>

                <Text>《文本：Text》</Text>
                <View className='container'>
                    {this.state.contents.map((item, index) => (
                        <Text key={index}>{item.text}</Text>
                    ))}
                    <Button className='btn-max-w button_style' plain type='default' onClick={this.add}>add line</Button>
                    <Button className='btn-max-w button_style' plain type='default' disabled={this.state.contentsLen ? false : true} onClick={this.remove}>remove line</Button>
                </View>

                <Text>《进度条：Progress》</Text>
                <View>
                    <Progress percent={20} showInfo strokeWidth={2} />
                    <Progress percent={40} strokeWidth={2} active backgroundColor='red' />
                    <Progress percent={60} strokeWidth={2} active />
                    <Progress percent={80} strokeWidth={2} active activeColor='blue' />
                </View>

                <Text>《富文本：RichText》</Text>
                <RichText nodes={this.state.nodes} />

            </ScrollView>
        )
    }
}