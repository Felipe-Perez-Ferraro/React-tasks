import TaskCard from "../tasklist/TaskCard";

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {//utilizamos el operador if para retornar un mensaje en caso de que no hayan tareas asignadas
    return <h1 className="text-white text-4xl font-bold text-center">No se encontraron tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (//realice un map en tasks, que lo que hace es devolverme un nuevo array con lo que le vaya asignando
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />//le pasamos el tercer componente y sus props y funciones
      ))}
    </div>
  );
}

export default TaskList;
