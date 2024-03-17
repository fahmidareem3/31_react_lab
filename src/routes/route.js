import React from "react";
import { Route } from "react-router-dom";

const Home = React.lazy(() => import("../modules/pages/home"));

const TaskManager = React.lazy(() => import("../modules/pages/taskManager"));

const home = {
  path: "/",
  exact: true,
  name: "Home component",
  component: <Home />,
  roles: ["User"],
  route: Route,
};

const taskManager = {
  path: "/taskmanager",
  exact: true,
  name: "Task Manager component",
  component: <TaskManager />,
  roles: ["User"],
  route: Route,
};
export const appRoutes = [home, taskManager];
