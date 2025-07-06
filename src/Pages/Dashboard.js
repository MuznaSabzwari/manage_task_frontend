import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UserHeader from "../Component/UserHeader";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import API from "../Api/Api";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const userId = Cookies.get("userId");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API}/Register/getTasks/${userId}`);
      setTasks(res.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleSaveTask = async () => {
    try {
      if (isEdit) {
        const res = await axios.put(
          `${API}/Register/updateTask/${userId}/${editIndex}`,
          { title, description, dueDate }
        );
        setTasks(res.data.tasks);
      } else {
        const res = await axios.post(
          `${API}/Register/addTask/${userId}`,
          {
            title,
            description,
            dueDate, //  using user-entered dueDate
          }
        );
        setTasks(res.data.tasks);
      }

      setShowModal(false);
      setTitle("");
      setDescription("");
      setDueDate("");
      setIsEdit(false);
      setEditIndex(null);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleEdit = (index) => {
    const taskToEdit = tasks[index];
    setTitle(taskToEdit.title);
    setDescription(taskToEdit.description);
    setDueDate(taskToEdit.dueDate || "");
    setIsEdit(true);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = async (index) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this task?");
      if (!confirmDelete) return;

      const res = await axios.delete(
        `${API}/Register/deleteTask/${userId}/${index}`
      );
      setTasks(res.data.tasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <UserHeader />
      <div className="bg-black min-h-screen w-full flex flex-col items-center py-8 px-4 max-sm:flex-col">
        {/* Top Section */}
        <div className="w-full max-w-5xl flex flex-row items-center justify-between mb-6 max-sm:flex-col">
          <h1 className="text-white text-2xl font-semibold">Total Tasks</h1>
          <div className="flex gap-4 max-sm:flex-col">
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600"
            />
            <button
              onClick={() => {
                setIsEdit(false);
                setTitle("");
                setDescription("");
                setDueDate("");
                setShowModal(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
            >
              Add New Task
            </button>
          </div>
        </div>

        {/* Task Boxes */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white">
          {filteredTasks.map((task, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow font-serif">
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <p className="text-lg text-gray-300">{task.description}</p>
              {task.dueDate && (
                <p className="text-md font-serif text-white mt-2">
                  Due at: {new Date(task.dueDate).toLocaleString()}
                </p>
              )}
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-1 text-3xl  hover:text-green-600"
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 text-3xl cursor-pointer hover:text-red-700"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4 text-black">
                {isEdit ? "Update Task" : "Add New Task"}
              </h2>
              <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
              <input
                type="datetime-local"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                min={new Date().toISOString().slice(0, 16)} 
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setIsEdit(false);
                    setTitle("");
                    setDescription("");
                    setDueDate("");
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveTask}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {isEdit ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
