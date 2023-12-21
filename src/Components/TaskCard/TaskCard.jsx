import React from "react";
import Countdown from "react-countdown";
import { FaEdit } from "react-icons/fa";

const TaskCard = ({ item }) => {
  const { _id, name, category, description, deadline, status, priority } = item;
  const deadlineDate = new Date(deadline);
  const now = new Date();
  const isDeadlineOver = deadlineDate < now;
  return (
    <div className="mx-auto bg-white  rounded-xl overflow-hidden shadow-lg p-6">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
        {category}
      </div>
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-500 text-justify mb-4">{description}</p>
      <div className="flex justify-between text-gray-700">
        {!isDeadlineOver && (
          <p className="">
            Deadline: <Countdown date={deadlineDate} daysInHours />
          </p>
        )}
        {isDeadlineOver && <p>Deadline is Over</p>}
        <p>Priority: {priority}</p>
      </div>
      <div className="flex items-center p-2 rounded-sm w-16 text-white bg-red-500 cursor-pointer hover:text-black hover:bg-gray-400 mx-auto gap-2 mt-3">
        <div className="mx-auto">
          <h1 className="text-base">Edit</h1>
        </div>
        <div className="mx-auto">
          <FaEdit></FaEdit>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
