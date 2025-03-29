import { Task } from "../util/data-tasks";

const TaskCard = ({ task }: { task: Task }) => {
  // Handle drag start event
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("application/json", JSON.stringify(task));
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
    </div>
  );
};

export default TaskCard;
