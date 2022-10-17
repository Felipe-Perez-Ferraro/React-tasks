import { useState } from "react";

function TaskForm({ createTask }) {//creamos la funcion y le paso por parametro la funcion creada en app.jsx 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {//esta es la funcion del form para que se actualicen los datos
    e.preventDefault();//uso prevent default para que no se recargue la pag

    createTask({
      title,
      description,
    });//creo la tarea y lo que se va a estar viendo es el titulo y la descripcion, el id no
    setTitle("");
    setDescription("");//uso estos dos estados para que cada vez que cree una tardea el input este vacio
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className='bg-gray-800 p-10 mb-4'>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-200 w-full mb-2 rounded-md p-1 outline-none"
        />
        <textarea
          placeholder="Escribe la descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-200 w-full mb-2 rounded-md p-1 outline-none"
        ></textarea>

        <button className="bg-orange-700 px-4 py-1 rounded-md text-white font-bold outline-none hover:bg-orange-400">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
