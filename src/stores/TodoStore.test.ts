import TodoStore, { Todo } from "./TodoStore";

let todos = TodoStore();

describe("TodoList", () => {
    beforeEach(() => {
        todos = TodoStore();
    });

    it('should add todos', () => {
        todos.add("My Todo");
        expect(todos.list.length).toBe(1);
        expect(todos.list.find((t: Todo) => t.title === 'My Todo')).toBeDefined();
    });

    it('should remove a todo', () => {
        todos.add("Test");
        todos.remove(todos.list[0]);
        expect(todos.list.length).toBe(0);
    });

    it('toggles a todo', () => {
        todos.add("Test");
        todos.toggle(todos.list[0]);
        expect(todos.list[0].isDone).toBe(true);
        expect(todos.unfinishedTodos.length).toBe(0);
    });

    it("has unfinished todos", () => {
        todos.add("Test");
        expect(todos.unfinishedTodos.length).toBe(1);
    });
});