import { Task } from "../util/data-tasks";

const TaskCard = ({ task, onUpdateTask, onDeleteTask }: { task: Task; onUpdateTask: (updatedTask: Task) => void; onDeleteTask: (taskId: number) => void; }) => {
  // Handle drag start event
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("application/json", JSON.stringify(task));
  };

  const handleEdit = () => {
    const newTitle = prompt("Edit task title:", task.title);
    const newDescription = prompt("Edit task description:", task.description);

    if (newTitle !== null && newDescription !== null) {
      const updatedTask = { ...task, title: newTitle, description: newDescription };
      onUpdateTask(updatedTask);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div
      className="border border-gray-200 rounded-lg p-3 m-2 bg-white shadow-sm hover:shadow transition-shadow duration-200 cursor-grab"
      draggable
      onDragStart={handleDragStart} // Allow dragging
    >
      <div className="text-lg py-1 font-medium text-gray-800">{task.title}</div>
      <div className="py-1 text-gray-600 text-sm leading-relaxed">
        {task.description}
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={handleEdit}
          className="text-blue-600 hover:underline text-sm"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-red-600 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;