import { useEffect, useRef, useState } from "react";
import TaskCard from "./components/TaskCard";
import { Status, statuses, Task } from "./util/data-tasks";
import Navbar from "./components/Navbar";
import Kanban from "./components/Kanban";
import About from "./components/About";
import TaskModal from "./components/TaskModal";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentlyHoveringOver, setCurrentlyHoveringOver] =
    useState<Status | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch tasks from the backend on mount
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  // Function to update the task status when dropped
  const handleDrop = async (
    e: React.DragEvent<HTMLDivElement>,
    newStatus: Status
  ) => {
    e.preventDefault();
    setCurrentlyHoveringOver(null);

    try {
      const taskData = JSON.parse(e.dataTransfer.getData("application/json")); // Get task data
      const taskId = taskData.id;

      // Update the state
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );

      // Send PATCH request to update backend
      await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDragEnter = (status: Status) => {
    setCurrentlyHoveringOver(status);
  };

  // Function to add a new task to "TO DO"
  const handleAddTask = async (title: string, description: string) => {
    const newTask: Task = {
      id: tasks.length + 1, // Assign a new unique id
      title,
      description,
      status: "todo",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]); // update state

    // Send POST request to backend
    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
  };

  // Function to edit task
  const handleUpdateTask = async (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    // Send PATCH request to backend
    await fetch(`http://localhost:3000/tasks/${updatedTask.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
  };

  // Function to delete task
  const handleDeleteTask = async (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

    // Send DELETE request to backend
    await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE",
    });
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const kanbanRef = useRef<HTMLDivElement>(null); // Reference for the Kanban component
  const aboutRef = useRef<HTMLDivElement>(null); // Reference for the About component

  const scrollToKanban = () => {
    if (kanbanRef.current) {
      kanbanRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar
        onSearch={setSearchTerm}
        onKanbanClick={scrollToKanban}
        onAboutClick={scrollToAbout}
      />

      {/* Hero section with improved typography */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">
          Task Management Simplified
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Manage your tasks like never before. Try out our Kanban board now.
        </p>

        {/* Main Kanban Board */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            {statuses.map((status) => (
              <div
                key={status}
                className={`flex-1 min-w-[220px] md:min-w-0 p-4 rounded-lg transition-all duration-200 ${
                  currentlyHoveringOver === status
                    ? "bg-blue-50 shadow-md border-2 border-blue-200"
                    : "bg-gray-50 border border-gray-200"
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, status)}
                onDragEnter={() => handleDragEnter(status)}
              >
                <div className="flex items-center justify-center mb-4">
                  <h2 className="text-center font-semibold px-4 py-2 rounded-full bg-gray-200 text-gray-700">
                    {status.toUpperCase()}
                  </h2>
                </div>

                <div className="min-h-[200px]">
                  {filteredTasks
                    .filter((task) => task.status === status)
                    .map((task) => (
                      <TaskCard key={task.id} task={task} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
                    ))}

                  {filteredTasks.filter((task) => task.status === status)
                    .length === 0 && (
                    <div className="h-20 flex items-center justify-center text-gray-400 italic border border-dashed border-gray-200 rounded-lg">
                      No tasks yet
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Add New Task</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <TaskModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onAddTask={handleAddTask}
            />
          </div>
        </div>
      </div>

      <div ref={kanbanRef}>
        <Kanban />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
}

export default App;
