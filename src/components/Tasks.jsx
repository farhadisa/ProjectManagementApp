import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Tasks({ tasks, onAdd, onClear }) {
  const [enteredTask, setEnteredtask] = useState("");

  function handleChange(event) {
    setEnteredtask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredtask("");
  }

  function handleEditClick(editText) {
    setEnteredtask(editText);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          value={enteredTask}
          onChange={handleChange}
          type="text"
          className="w-64 px-2 py-1 rounded-sm border-b-2 focus:outline-none focus:shadow-md focus:shadow-slate-400 bg-stone-200"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-2 mt-8 rounded-md bg-slate-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-3.5">
              <span className="grow w-2/4  text-slate-800">{task.text}</span>
              <button
                onClick={() => handleEditClick(task.text)}
                className="grow w-1 text-stone-700 hover:text-yellow-800 "
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="text-slate-400 hover:text-slate-600"
                />
              </button>
              <button
                onClick={() => onClear(task.id)}
                className="grow w-1 text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
