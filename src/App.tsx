import "macro-css";
import {FC} from "react";
import "./App.module.scss"
import  TodoList  from "./TodoList"
 
const App: FC = () => {
  
  return (
    <div className="App">
        <TodoList/>
    </div>
  )
}

export default App
