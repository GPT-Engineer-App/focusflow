import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", dueDate: "", priority: "" });

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ title: "", dueDate: "", priority: "" });
    setShowForm(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <Button onClick={() => setShowForm(true)}>Add Task</Button>
      </header>
      {showForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
          className="mb-4"
        >
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            className="border p-2 mb-2 w-full"
            required
          />
          <select
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            className="border p-2 mb-2 w-full"
            required
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <Button type="submit">Add Task</Button>
        </form>
      )}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="border p-2 mb-2 flex justify-between items-center">
            <div>
              <input type="checkbox" className="mr-2" />
              <span>{task.title}</span>
            </div>
            <div>
              <span className="mr-2">{task.dueDate}</span>
              <span className={`priority-${task.priority}`}>{task.priority}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;