import { observable, computed, action } from 'mobx'
import { createContext } from '@tarojs/taro'

interface Todo {
  id: number
  title: string
  completed: boolean
}

class TodoStore {

  /*
  如使用 @observable 装饰器来定义可观察对象时，请确保该属性已经初始化，比如：
  @observable counter // 错误，值改变后将无法触发重新渲染
  @observable counter = 0 // 正确
  */
  @observable todos: Todo[] = []

  @computed get total() {
    return this.todos.length
  }

  @computed get completedCount() {
    return this.todos.filter(item => item.completed).length
  }

  @action.bound
  add() {
    const id = this.todos.length + 1
    this.todos.push({
      id,
      title: `Item ${id}`,
      completed: false
    })
  }

  @action.bound
  toggle(index) {
    this.todos[index].completed = !this.todos[index].completed
  }
}

export default createContext(new TodoStore())
