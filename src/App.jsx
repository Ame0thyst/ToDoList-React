// import { useState, useEffect } from "react";
// import tambah from "./assets/tambah.png"; // Import gambar

// const App = () => {
//   // State untuk menyimpan todo list di masing-masing bagian
//   const [doTasks, setDoTasks] = useState([]);
//   const [decideTasks, setDecideTasks] = useState([]);
//   const [delegateTasks, setDelegateTasks] = useState([]);
//   const [deleteTasks, setDeleteTasks] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   // State untuk form input
//   const [description, setDescription] = useState("");
//   const [media, setMedia] = useState(null);
//   const [priority, setPriority] = useState("do");

//   // State untuk mengedit tugas
//   const [editingTask, setEditingTask] = useState(null);

//   // Memuat data dari localStorage saat aplikasi pertama kali dijalankan
//   useEffect(() => {
//     const storedDoTasks = JSON.parse(localStorage.getItem("doTasks"));
//     const storedDecideTasks = JSON.parse(localStorage.getItem("decideTasks"));
//     const storedDelegateTasks = JSON.parse(
//       localStorage.getItem("delegateTasks")
//     );
//     const storedDeleteTasks = JSON.parse(localStorage.getItem("deleteTasks"));

//     if (storedDoTasks) setDoTasks(storedDoTasks);
//     if (storedDecideTasks) setDecideTasks(storedDecideTasks);
//     if (storedDelegateTasks) setDelegateTasks(storedDelegateTasks);
//     if (storedDeleteTasks) setDeleteTasks(storedDeleteTasks);
//   }, []);

//   // Menyimpan data ke localStorage setiap kali state diubah
//   useEffect(() => {
//     localStorage.setItem("doTasks", JSON.stringify(doTasks));
//   }, [doTasks]);

//   useEffect(() => {
//     localStorage.setItem("decideTasks", JSON.stringify(decideTasks));
//   }, [decideTasks]);

//   useEffect(() => {
//     localStorage.setItem("delegateTasks", JSON.stringify(delegateTasks));
//   }, [delegateTasks]);

//   useEffect(() => {
//     localStorage.setItem("deleteTasks", JSON.stringify(deleteTasks));
//   }, [deleteTasks]);

//   const handleAddClick = () => {
//     setShowForm(!showForm);
//     setEditingTask(null); // Reset editing task ketika menampilkan form
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const newTodo = {
//       description,
//       media,
//     };

//     if (editingTask) {
//       // Update task
//       switch (priority) {
//         case "do":
//           setDoTasks(
//             doTasks.map((task, index) =>
//               index === editingTask.index ? newTodo : task
//             )
//           );
//           break;
//         case "decide":
//           setDecideTasks(
//             decideTasks.map((task, index) =>
//               index === editingTask.index ? newTodo : task
//             )
//           );
//           break;
//         case "delegate":
//           setDelegateTasks(
//             delegateTasks.map((task, index) =>
//               index === editingTask.index ? newTodo : task
//             )
//           );
//           break;
//         case "delete":
//           setDeleteTasks(
//             deleteTasks.map((task, index) =>
//               index === editingTask.index ? newTodo : task
//             )
//           );
//           break;
//         default:
//           break;
//       }
//     } else {
//       // Add new task
//       switch (priority) {
//         case "do":
//           setDoTasks([...doTasks, newTodo]);
//           break;
//         case "decide":
//           setDecideTasks([...decideTasks, newTodo]);
//           break;
//         case "delegate":
//           setDelegateTasks([...delegateTasks, newTodo]);
//           break;
//         case "delete":
//           setDeleteTasks([...deleteTasks, newTodo]);
//           break;
//         default:
//           break;
//       }
//     }

//     // Reset form
//     setDescription("");
//     setMedia(null);
//     setPriority("do");
//     setShowForm(false);
//   };

//   const handleEdit = (task, index, listType) => {
//     setEditingTask({ task, index, listType });
//     setDescription(task.description);
//     setMedia(task.media);
//     setPriority(listType);
//     setShowForm(true);
//   };

//   const handleDelete = (index, listType) => {
//     switch (listType) {
//       case "do":
//         setDoTasks(doTasks.filter((_, i) => i !== index));
//         break;
//       case "decide":
//         setDecideTasks(decideTasks.filter((_, i) => i !== index));
//         break;
//       case "delegate":
//         setDelegateTasks(delegateTasks.filter((_, i) => i !== index));
//         break;
//       case "delete":
//         setDeleteTasks(deleteTasks.filter((_, i) => i !== index));
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="h-screen relative grid grid-cols-2 grid-rows-2 gap-4 p-4">
//       {/* Bagian untuk Do */}
//       <div className="bg-green-300 p-4 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-2">Do</h2>
//         <ul>
//           {doTasks.map((task, index) => (
//             <li
//               key={index}
//               className="flex items-center justify-between p-4 mb-2 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all"
//             >
//               <div className="flex items-center">
//                 {task.media && (
//                   <img
//                     src={URL.createObjectURL(task.media)}
//                     alt="task media"
//                     className="w-10 h-10 mr-2"
//                   />
//                 )}
//                 <span>{task.description}</span>
//               </div>
//               <div>
//                 <button
//                   onClick={() => handleEdit(task, index, "do")}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index, "do")}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Bagian untuk Delegate */}
//       <div className="bg-yellow-300 p-4 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-2">Delegate</h2>
//         <ul>
//           {delegateTasks.map((task, index) => (
//             <li
//               key={index}
//               className="flex items-center justify-between p-4 mb-2 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all"
//             >
//               <div className="flex items-center">
//                 {task.media && (
//                   <img
//                     src={URL.createObjectURL(task.media)}
//                     alt="task media"
//                     className="w-10 h-10 mr-2"
//                   />
//                 )}
//                 <span>{task.description}</span>
//               </div>
//               <div>
//                 <button
//                   onClick={() => handleEdit(task, index, "delegate")}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index, "delegate")}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Bagian untuk Decide */}
//       <div className="bg-red-300 p-4 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-2">Decide</h2>
//         <ul>
//           {decideTasks.map((task, index) => (
//             <li
//               key={index}
//               className="flex items-center justify-between p-4 mb-2 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all"
//             >
//               <div className="flex items-center">
//                 {task.media && (
//                   <img
//                     src={URL.createObjectURL(task.media)}
//                     alt="task media"
//                     className="w-10 h-10 mr-2"
//                   />
//                 )}
//                 <span>{task.description}</span>
//               </div>
//               <div>
//                 <button
//                   onClick={() => handleEdit(task, index, "decide")}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index, "decide")}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Bagian untuk Delete */}
//       <div className="bg-red-300 p-4 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-2">Delete</h2>
//         <ul>
//           {deleteTasks.map((task, index) => (
//             <li
//               key={index}
//               className="flex items-center justify-between p-4 mb-2 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all"
//             >
//               <div className="flex items-center">
//                 {task.media && (
//                   <img
//                     src={URL.createObjectURL(task.media)}
//                     alt="task media"
//                     className="w-10 h-10 mr-2"
//                   />
//                 )}
//                 <span>{task.description}</span>
//               </div>
//               <div>
//                 <button
//                   onClick={() => handleEdit(task, index, "delete")}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index, "delete")}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Tombol tanda tambah sebagai gambar */}
//       <img
//         src={tambah}
//         alt="Add To Do"
//         className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 cursor-pointer"
//         onClick={handleAddClick}
//       />

//       {/* Formulir muncul saat tombol klik */}
//       {showForm && (
//         <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h3 className="text-2xl mb-4">Add/Edit To Do</h3>
//             <form onSubmit={handleFormSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Deskripsi</label>
//                 <input
//                   type="text"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Media</label>
//                 <input
//                   type="file"
//                   onChange={(e) => setMedia(e.target.files[0])}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">
//                   Tingkat Kepentingan
//                 </label>
//                 <select
//                   value={priority}
//                   onChange={(e) => setPriority(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 >
//                   <option value="do">Do</option>
//                   <option value="decide">Decide</option>
//                   <option value="delegate">Delegate</option>
//                   <option value="delete">Delete</option>
//                 </select>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 {editingTask ? "Update" : "Add"}
//               </button>
//             </form>
//             <button
//               className="mt-4 text-red-500"
//               onClick={() => setShowForm(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import tambah from "./assets/tambah.png"; // Import gambar

const App = () => {
  // State untuk menyimpan todo list di masing-masing bagian
  const [tasks, setTasks] = useState({
    do: [],
    decide: [],
    delegate: [],
    delete: [],
  });
  const [showForm, setShowForm] = useState(false);
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState(null);
  const [priority, setPriority] = useState("do");
  const [editingTask, setEditingTask] = useState(null);

  // Memuat data dari localStorage saat aplikasi pertama kali dijalankan
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  // Menyimpan data ke localStorage setiap kali state diubah
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddClick = () => {
    setShowForm(!showForm);
    setEditingTask(null); // Reset editing task ketika menampilkan form
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = { description, media };

    if (editingTask) {
      const { index, oldPriority } = editingTask;
      const updatedTasks = { ...tasks };

      // Hapus dari bagian lama jika prioritas telah berubah
      updatedTasks[oldPriority] = updatedTasks[oldPriority].filter(
        (_, i) => i !== index
      );

      // Tambah ke bagian baru
      if (!updatedTasks[priority]) {
        updatedTasks[priority] = [];
      }
      updatedTasks[priority].splice(index, 0, newTodo);

      setTasks(updatedTasks);
    } else {
      const updatedTasks = { ...tasks };
      updatedTasks[priority] = [...updatedTasks[priority], newTodo];
      setTasks(updatedTasks);
    }

    // Reset form
    setDescription("");
    setMedia(null);
    setPriority("do");
    setShowForm(false);
  };

  const handleEdit = (task, index, priority) => {
    setEditingTask({ task, index, oldPriority: priority });
    setDescription(task.description);
    setMedia(task.media);
    setPriority(priority);
    setShowForm(true);
  };

  const handleDelete = (index, priority) => {
    const updatedTasks = { ...tasks };
    updatedTasks[priority] = updatedTasks[priority].filter(
      (_, i) => i !== index
    );
    setTasks(updatedTasks);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const { droppableId: sourceId } = source;
    const { droppableId: destinationId } = destination;

    if (sourceId !== destinationId) {
      const movedTask = tasks[sourceId][source.index];
      const updatedTasks = { ...tasks };

      updatedTasks[sourceId].splice(source.index, 1);
      updatedTasks[destinationId].splice(destination.index, 0, movedTask);

      setTasks(updatedTasks);
    }
  };

  return (
    <div className="h-screen relative grid grid-cols-2 grid-rows-2 gap-4 p-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(tasks).map((priority) => (
          <Droppable key={priority} droppableId={priority}>
            {(provided) => (
              <div
                className={`p-4 rounded-lg shadow-lg ${
                  priority === "do"
                    ? "bg-green-300"
                    : priority === "decide"
                    ? "bg-red-300"
                    : priority === "delegate"
                    ? "bg-yellow-300"
                    : "bg-gray-300"
                }`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-2xl font-bold text-center mb-2">
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </h2>
                <ul>
                  {tasks[priority].map((task, index) => (
                    <Draggable
                      key={`${priority}-${index}`}
                      draggableId={`${priority}-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          className="flex items-center justify-between p-4 mb-2 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="flex items-center">
                            {task.media && (
                              <img
                                src={URL.createObjectURL(task.media)}
                                alt="task media"
                                className="w-10 h-10 mr-2"
                              />
                            )}
                            <span>{task.description}</span>
                          </div>
                          <div>
                            <button
                              onClick={() => handleEdit(task, index, priority)}
                              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(index, priority)}
                              className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                              Delete
                            </button>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>

      {/* Tombol tanda tambah sebagai gambar */}
      <img
        src={tambah}
        alt="Add To Do"
        className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 cursor-pointer"
        onClick={handleAddClick}
      />

      {/* Formulir muncul saat tombol klik */}
      {showForm && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl mb-4">Add/Edit To Do</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Deskripsi</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Media</label>
                <input
                  type="file"
                  onChange={(e) => setMedia(e.target.files[0])}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Tingkat Kepentingan
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="do">Do</option>
                  <option value="decide">Decide</option>
                  <option value="delegate">Delegate</option>
                  <option value="delete">Delete</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {editingTask ? "Update" : "Add"}
              </button>
            </form>
            <button
              className="mt-4 text-red-500"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
