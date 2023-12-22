import { useEffect, useState } from "react";
import useTask from "../../Hooks/useTask";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";
import TaskCard from "../../Components/TaskCard/TaskCard";

const ManageTask = () => {
  const [tasks, refetch, isPending] = useTask();
  console.log(tasks);
  const statuses = ["to-do", "ongoing", "completed"];
  const TODO = tasks?.filter((item) => item.status === "to-do");
  const Ongoing = tasks?.filter((item) => item.status === "ongoing");
  const Completed = tasks?.filter((item) => item.status === "completed");

  if (isPending) {
    return (
      <span className="loading text-center mt-20 loading-spinner loading-lg"></span>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="text-center my-10">
        <Helmet>
          <title>Manage Task</title>
        </Helmet>

        <div className="flex flex-col justify-around lg:flex-row gap-5 lg:gap-20">
          {statuses?.map((status, index) => (
            <TaskCard
              key={index}
              status={status}
              index={index}
              tasks={tasks}
              refetch={refetch}
              TODO={TODO}
              Ongoing={Ongoing}
              Completed={Completed}
              isPending={isPending}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default ManageTask;
