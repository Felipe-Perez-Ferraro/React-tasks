function taskCard({ task, deleteTask }) {
  
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold capitalize">{task.title}</h2>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-600 px-2 py-1 mt-4 rounded-md hover:bg-red-500"
        onClick={() => deleteTask(task.id)}
      >
        eliminar tarea
      </button>
    </div>
  );
}

export default taskCard;
