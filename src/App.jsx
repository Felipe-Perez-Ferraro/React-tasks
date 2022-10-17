import TaskList from './components/tasklist/TaskList'
import TaskForm from "./components/taskform/TaskForm";
import {useState} from 'react'//Importamos el hook de useState

  function App() {
  const [tasks, setTasks] = useState([]);//creo la funcion useState con un array vacio llamado tasks donde se van a almacenar nuestras tareas

  const createTask = (task) => {//creo la funcion createTask y le paso por parametro 'task' que lo que me devuelve es un objeto con un titulo, id y descripcion
      setTasks([
        ...tasks, //aca usamos el spread operator para ir acumulando los objetos y que no se me sebreescriban, esto quiere decir que nos devuelve todo lo que habia en un array y se le suma lo que le vayamos agregando
        {
          title: task.title, //le pasamos por parametro task asi lo reconoce
          id: tasks.length,
          description: task.description,
        },
      ]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }//aqui utilizamos el metodo filter que lo que hace es filtrar en nuestros ids preguntando si es distinto el numero de id con el elemento que queremos eliminar, de ser distinto devuelve true y la taks se queda, de ser igual gracias al usestate lo elimina

  return (
    <main className="bg-slate-900 h-screen">
      <div className='container mx-auto p-10'>
        <TaskForm createTask={createTask} />
        {/* para pasar props, funciones etc de un archivo jsx a otro se hace de esta manera */}
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </main>
  );
  }


export default App;
