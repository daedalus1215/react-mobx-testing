import {action, makeObservable, observable } from 'mobx';
export interface Todo {
    id: number;
    title: string;
    isDone: boolean;
}

class TodoStore {
    @observable
    list: Todo[] = [];

    constructor() {
        // makeObservable(this, {
        //     list: observable,
        //     add: action,
        //     toggle: action,
        //     remove: action,
        // });
        makeObservable(this)
    }
    @action
    add(title: string) {
        if (title.length < 3) {
            return;
        }
        this.list.push({ id: Date.now(), isDone: false, title });
    }
    @action
    toggle(todo: Todo) {
        todo.isDone = !todo.isDone
    }
    @action
    remove(todo: Todo) {
        this.list = this.list.filter(t => t.id !== todo.id);
    }
}

export default TodoStore;