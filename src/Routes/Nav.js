import { LuLayoutDashboard } from "react-icons/lu";
import { MdSmartButton } from "react-icons/md";
import { FaTable } from "react-icons/fa6";

export const nav = [
  {
    title: "Dashboard",
    path: "/",
    icon: <LuLayoutDashboard style={{ background: "-webkit-linear-gradient(#5E7FE7, #D86572)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />,
  },
  {
    title: "Buttons",
    path: "/buttons",
    icon: <MdSmartButton style={{ background: "-webkit-linear-gradient(#5E7FE7, #D86572)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />,
  },
  {
    title: "Tables",
    path: "/tables",
    icon: <FaTable style={{ background: "-webkit-linear-gradient(#5E7FE7, #D86572)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />,
  },
  {
    title: "Kanban",
    path: "/kanban",
    icon: <LuLayoutDashboard style={{ background: "-webkit-linear-gradient(#5E7FE7, #D86572)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />,
  },
];
