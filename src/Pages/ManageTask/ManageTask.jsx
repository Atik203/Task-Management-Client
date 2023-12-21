import React, { useState } from "react";
import useTask from "../../Hooks/useTask";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";
import TaskCard from "../../Components/TaskCard/TaskCard";

const ManageTask = () => {
  const [tasks, refetch] = useTask();
  const status = ["to-do", "ongoing", "completed"];
  const initialIndex = status.indexOf(0);
  const TODO = tasks?.filter((item) => item.status === "to-do");
  const Ongoing = tasks?.filter((item) => item.status === "ongoing");
  const Completed = tasks?.filter((item) => item.status === "completed");
  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <div className="text-center my-10">
      <Helmet>
        <title>Manage Task</title>
      </Helmet>
      <div className="mx-auto mb-10">
        <Tabs
          className=""
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="border-none text-orange-500">
            <Tab>To-Do</Tab>
            <Tab>On Going</Tab>
            <Tab>Completed</Tab>
          </TabList>
          <TabPanel>
            <div className="grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center my-20 gap-8">
              {TODO?.map((item) => (
                <TaskCard item={item} key={item._id}></TaskCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid w-11/12 mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center my-20 gap-8">
              {Ongoing?.map((item) => (
                <TaskCard item={item} key={item._id}></TaskCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid w-11/12 mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center my-20 gap-8">
              {Completed?.map((item) => (
                <TaskCard item={item} key={item._id}></TaskCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageTask;
