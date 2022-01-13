import './styles.css';
import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
 
export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ) );

// el primer argumento esta llamando el todo, 
//el argumento del parametro es el primer argumento que regresa el forEach y cuando es solo un argumento.
// todoList.todos.forEach( crearTodoHtml );
