import { useNavigate as navigate } from "react-router-dom";
function AddData() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const currentTableKeys = Object.keys(userInfo[0].table[0]);
  console.log(Object.keys(userInfo[0].table[0]));

  return (
    <div className="bg-[#FEF7FF] text-center p-4 text-[3vh]  text-[#9B89B3] min-h-screen">
      <h2 className="font-bold">Add Data</h2>
      <div className="font-semibold flex justify-center">
        <form className="rounded-md border-2 border-[#845EC2] m-2 max-w-[60vw] min-w-[40vw]">
          {currentTableKeys.map((tableLabel, index) => (
            <div
              className="rounded-md text-center m-2 flex flex-col"
              key={index}
            >
              {tableLabel}
              <input
                className="font-normal m-2 w-full h-[6vh] border-[#9B89B3] bg-[#FEFEDF] outline-none"
                type="text"
                name={tableLabel}
                placeholder={`  ${tableLabel}`}
              ></input>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
export default AddData;

//na doulevei to edit, delete, complete kai uncomplete

// import React, { useState, useEffect } from "react";

// const TodoList = () => {
//   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
//   const [newTodo, setNewTodo] = useState("");
//   const [totalTodos, setTotalTodos] = useState(0);
//   const [completedTodos, setCompletedTodos] = useState(0);

//   useEffect(() => {
//     setTotalTodos(todos.length);
//     setCompletedTodos(todos.filter((todo) => todo.completed).length);
//     console.log("todos changed", todos);
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = () => {
//     setTodos([...todos, { text: newTodo, completed: false }]);
//     setNewTodo("");
//   };

//   const toggleTodo = (index) => {
//     const tempCompletedTodos = [...todos];
//     tempCompletedTodos[index].completed = !tempCompletedTodos[index].completed;
//     setTodos(tempCompletedTodos);
//   };

//   const editTodo = (index, newText) => {
//     const editedTodos = [...todos];
//     editedTodos[index].text = newText;
//     setTodos(editedTodos);
//   };

//   const deleteTodo = (index) => {
//     const newArray = [...todos];
//     newArray.splice(index, 1);
//     setTodos(newArray);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Todo List</h1>
//       <input
//         className="border p-2 rounded"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button
//         className="bg-blue-500 text-white p-2 rounded ml-2"
//         onClick={addTodo}
//       >
//         Add Todo
//       </button>
//       <ul className="mt-4">
//         {todos.map((todo, index) => (
//           <li key={index} className="flex items-center mb-2">
//             <span
//               className={`cursor-pointer ${
//                 todo.completed ? "line-through" : ""
//               }`}
//               onClick={() => toggleTodo(index)}
//             >
//               {todo.text}
//             </span>
//             <button
//               className="bg-yellow-500 text-white p-2 rounded ml-2"
//               onClick={() => editTodo(index, prompt("New text:"))}
//             >
//               Edit
//             </button>
//             <button
//               className="bg-red-500 text-white p-2 rounded ml-2"
//               onClick={() => deleteTodo(index)}
//             >
//               Delete
//             </button>
//             <button
//               className="bg-green-500 text-white p-2 rounded ml-2"
//               onClick={() => toggleTodo(index)}
//             >
//               Completed
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p className="mt-4">Total Todos: {totalTodos}</p>
//       <p>Completed Todos: {completedTodos}</p>
//     </div>
//   );
// };

// export default TodoList;
