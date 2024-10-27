const TaskOrLog = ({ Task, TaskNumber, Log, Time, Logger }) => {
  return (
    <div className="border-[1px] border-gray-200 flex items-center p-3 justify-between rounded-lg">
      {
        Task ? <h5>{Task}</h5> : <div>
          <h5 className="text-sm font-light text-gray-500">{Time}</h5>
          <h5>{Log}</h5>
        </div>
      }
      {TaskNumber ? (
        <h6 className="text-pink-800 bg-pink-800 bg-opacity-20 rounded-md px-3 py-1">
          {TaskNumber}
        </h6>
      ) : (
        <h6 className="text-gray-500 font-light">{Logger}</h6>
      )}
    </div>
  );
};

export default TaskOrLog;
