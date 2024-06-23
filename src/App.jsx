import { Fragment, useState } from 'react'
import React from 'react';

// let counter = 4;
// function App() {
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "go to gym",
//     description: "go to gym today"
//   }, {
//     id: 2,
//     title: "eat food",
//     description: "eat healthy food"
//   }, {
//     id: 3,
//     title: "go to class",
//     description: "go to class"
//   }]);

//   function addTodo() {
//     // counter = counter+1;
//     setTodos([...todos, {
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }])
//   }

//   return <div>
//     <button onClick={addTodo}>Add a todo</button>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
//   </div>

// }

// function Todo({ title, description }) {
//   console.log(title + " " + description);
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }

// function App(){
//   return <div>
//     <CardWrapperComponent innerComponent={<TextComponent/>}>
//       </CardWrapperComponent>
//       </div>
// }
// function TextComponent(){
//   return <div>hi there</div>
// }

// function CardWrapperComponent({innerComponent}){
//   // create a div which has border 2 px
//   return <div style={{border:"2px solid black"}}>{innerComponent}</div>
// }
// actual way of writing wrapper
function App(){
  return <div>
    <CardWrapperComponent>hi there</CardWrapperComponent>
    <CardWrapperComponent>hi ther2</CardWrapperComponent>
    <CardWrapperComponent>hi there3</CardWrapperComponent>
    <CardWrapperComponent>hi there4</CardWrapperComponent>
    <CardWrapperComponent>
      <CardWrapperComponent>
         hi there5
      </CardWrapperComponent>
    </CardWrapperComponent>
  </div>
}

function CardWrapperComponent({children}){
  // add more style to Card wrapper component
  // children will be just passed from the above as it is  - hi there in this case which is a string, even div,span...
 return <div style={{border:"2px solid black", padding:32}}>
  {children}
 </div>
}
export default App