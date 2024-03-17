import Buttons from "../Pages/Buttons";
import DashboardScreen from "../Pages/DashboardScreen";
import Kanban from "../Pages/Kanban";
import Tables from "../Pages/Tables";


export const RouteLink = [
  { path: "/", component:  <DashboardScreen /> },
  { path: "/buttons", component:  <Buttons /> },
  { path: "/tables", component:  <Tables /> },
  { path: "/kanban", component:  <Kanban /> },
];
