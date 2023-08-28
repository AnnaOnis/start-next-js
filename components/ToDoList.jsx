import React, {useState} from 'react'
import styles from './ToDoList.module.css'

function InputForm({val, setVal, setList}){
  
  return <fieldset className={styles.inputForm}>
      <input 
        className={styles.inputTodo}
        value={val||''}
        placeholder='Что нужно сделать?'
        onInput={ evt => setVal(evt.target.value)}
        />
      <button className={styles.inputTodo} onClick={() => setList()}>Добавить</button> 
    </fieldset>
}

function List({li, deleteTodo}){

  return <fieldset className={styles.todoList}>
    <h2 className={styles.title}>MY TODOLIST</h2>
    <div className={styles.list}>
      <ol >
        {li.map(l=><li className={styles.item} key={l.id}>{l.text} <button className={styles.deleteButton} onClick={()=>deleteTodo(l.id)}>x</button></li>)}
      </ol> 
    </div>
  </fieldset>
}

export default function ToDoList(){
  const
  [text, setText] = useState(),
  [todos, setTodos] = useState([]);
    
  return <>
    <InputForm val={text} setVal={t=>setText(t)} setList={()=>setTodos([...todos, {id: todos.length+text, text}])}/>
    <List li={todos} deleteTodo={(id)=>setTodos(todos.filter(todo=>todo.id!=id))}/>
    </>
    }