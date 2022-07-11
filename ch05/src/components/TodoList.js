import TodoItem from "./TodoItem";

const todos = [
  { id: 1, done: false, text: "Prima attività" },
  { id: 2, done: true, text: "Seconda attività" },
  { id: 3, done: false, text: "Terza attività" },
];

function getTodoItems(tList) {
  return tList.map((t) => <TodoItem key={t.id} done={t.done} text={t.text} />);
}

export default function TodoList() {
  const todoItems = getTodoItems(todos);
  return <ul className="list-group pb-3">{todoItems}</ul>;
}
