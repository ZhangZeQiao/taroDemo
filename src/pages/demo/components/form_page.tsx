import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Button, Text, Checkbox, Label, Form, Switch, Input, RadioGroup, Radio, Slider, Textarea } from '@tarojs/components'

export default class FormPage extends Component {

    state = {
        list: [
            {
                value: '美国',
                text: '美国',
                checked: false
            },
            {
                value: '中国',
                text: '中国',
                checked: true
            },
            {
                value: '巴西',
                text: '巴西',
                checked: false
            },
            {
                value: '日本',
                text: '日本',
                checked: false
            },
            {
                value: '英国',
                text: '英国',
                checked: false
            },
            {
                value: '法国',
                text: '法国',
                checked: false
            }
        ]
    }

    config: Config = {
        navigationBarTitleText: '表单组件'
    }

    formSubmit = e => {
        console.log(e)
    }

    formReset = e => {
        console.log(e)
    }

    render() {
        return (
            <ScrollView>

                <Text>《按钮：Button》</Text>
                <View className='container'>
                    <Button className='btn-max-w' plain type='primary'>按钮</Button>
                    <Button className='btn-max-w' plain type='primary' disabled>不可点击的按钮</Button>
                    <Button className='btn-max-w' plain >按钮</Button>
                    <Button className='btn-max-w' plain disabled >按钮</Button>
                    <Button size='mini' type='primary'>按钮</Button>
                    <Button size='mini' >按钮</Button>
                    <Button size='mini' type='warn'>按钮</Button>
                </View>

                <Text>《选择器：Checkbox》</Text>
                <View>
                    <View>
                        <Text>默认样式：</Text>
                        <Checkbox value='选中' checked>选中</Checkbox>
                        <Checkbox style='margin-left: 20rpx' value='未选中'>未选中</Checkbox>
                    </View>
                    <View>
                        <Text>推荐展示样式：</Text>
                        {this.state.list.map((item, i) => {
                            return (
                                <Label className='checkbox-list__label' for={i} key={i}>
                                    <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>{item.text}</Checkbox>
                                </Label>
                            )
                        })}
                    </View>
                </View>

                <Text>《表单，将组件内的用户输入的值提交：Form》</Text>
                <Form onSubmit={this.formSubmit} onReset={this.formReset} >
                    <View className='form-example-body'>
                        <Switch name='switch' className='form-switch'></Switch>
                    </View>
                </Form>

                <Text>《输入框：Input》</Text>
                <View className='input-example-body'>
                    <Text>可以自动聚焦的 input</Text>
                    <Input type='text' placeholder='将会获取焦点' focus />
                    <Text>控制最大输入长度的 input</Text>
                    <Input type='text' placeholder='最大输入长度为 10' maxLength={10} />
                    <Text>数字输入的 input</Text>
                    <Input type='number' placeholder='这是一个数字输入框' />
                    <Text>密码输入的 input</Text>
                    <Input type='idcard' password placeholder='这是一个密码输入框' />
                    <Text>带小数点的 input</Text>
                    <Input type='digit' placeholder='带小数点的数字键盘' />
                    <Text>身份证输入的 input</Text>
                    <Input type='idcard' placeholder='身份证输入键盘' />
                    <Text>控制占位符颜色的 input</Text>
                    <Input type='text' placeholder='占位符字体是红色的' placeholderStyle='color:red' />
                </View>

                <Text>《用来改进表单组件的可用性，使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件。for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件：Label》</Text>
                <RadioGroup>
                    <Label className='example-body__label' for='1' key='1'>
                        <Radio value='USA'>USA</Radio>
                    </Label>
                    <Label className='example-body__label' for='2' key='2'>
                        <Radio value='CHN' checked>
                            CHN
                        </Radio>
                    </Label>
                </RadioGroup>

                <Text>《滑动选择器：Slider》</Text>
                <View className='components-page'>
                    <Text>设置 step</Text>
                    <Slider step={1} value={50} />
                    <Text>显示当前 value</Text>
                    <Slider step={1} value={50} showValue />
                    <Text>设置最小/最大值</Text>
                    <Slider step={1} value={100} showValue min={50} max={200} />
                </View>

                <Text>《多行输入框：Textarea》</Text>
                <View className='textarea-components-page'>
                    <Text>输入区域高度自适应，不会出现滚动条</Text>
                    <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight />
                    <Text>这是一个可以自动聚焦的 textarea</Text>
                    <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus />
                </View>

            </ScrollView>
        )
    }
}