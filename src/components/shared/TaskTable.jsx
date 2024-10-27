import { HiOutlineDotsVertical } from "react-icons/hi";
import TaskOrLog from "./TaskOrLog";
// ({Task, TaskNumber, Log, Time, Logger})

const TaskTable = ({ CardName }) => {
  console.log(CardName);

  return (
    <div className="bg-white rounded-xl p-5 h-min">
      <div className="flex justify-between items-center">
        <h5>{CardName}</h5>
        <HiOutlineDotsVertical className="text-lg" />
      </div>
      <hr className="my-3" />
      {CardName === "Pending Tasks" ? (
        <div className="space-y-2">
          <TaskOrLog Task="Restaurant Account" TaskNumber="10" />
          <TaskOrLog Task="Restaurant Onboarding" TaskNumber="10" />
          <TaskOrLog Task="Rider Partners" TaskNumber="10" />
          <TaskOrLog Task="Rider Onboarding" TaskNumber="10" />
          <TaskOrLog Task="Support Tickets" TaskNumber="10" />
        </div>
      ) : (
        <div className="space-y-2">
          <TaskOrLog
            Log="Modified New Item"
            Time="12-04-2024 10:14 PM"
            Logger="Jakit Sarkar"
          />
          <TaskOrLog
            Log="Modified New Item"
            Time="12-04-2024 10:14 PM"
            Logger="Jakit Sarkar"
          />
          <TaskOrLog
            Log="Modified New Item"
            Time="12-04-2024 10:14 PM"
            Logger="Jakit Sarkar"
          />
          <TaskOrLog
            Log="Modified New Item"
            Time="12-04-2024 10:14 PM"
            Logger="Jakit Sarkar"
          />
          <TaskOrLog
            Log="New Item Approved"
            Time="12-04-2024 10:14 PM"
            Logger="Jakit Sarkar"
          />
        </div>
      )}
    </div>
  );
};

export default TaskTable;
