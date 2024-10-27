import RevenueData from "./RevenueData";
import TaskTable from "./shared/TaskTable";

const TableSection = () => {
  return (
    <div className="grid grid-cols-2 mt-5 gap-5">
      <RevenueData />
      <TaskTable CardName="Pending Tasks" />
      <TaskTable CardName="Activity Log" />
    </div>
  );
};

export default TableSection;
