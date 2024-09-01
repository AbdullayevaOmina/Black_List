import {
  CatgoryIcon,
  OwerviewIcon,
  usersGroupIcon,
  bagIcon,
  SettingsIcon,
} from "@drawer-icons";
import { getDataFromCookie } from "@cookie";

const role = getDataFromCookie("role");

const superadmin = [
  {
    path: "/main",
    content: "Dashboard",
    icon: OwerviewIcon,
  },
  {
    path: "/main/users",
    content: "Users",
    icon: usersGroupIcon,
  },
  {
    path: "/main/employees",
    content: "Employees",
    icon: bagIcon,
  },
  {
    path: "/main/hr",
    content: "HR",
    icon: CatgoryIcon,
  },

  {
    path: "/main/settings",
    content: "Settings",
    icon: SettingsIcon,
  },
];

const hr = [
  {
    path: "/main",
    content: "Dashboard",
    icon: OwerviewIcon,
  },
  {
    path: "/main/users",
    content: "Users",
    icon: usersGroupIcon,
  },
  {
    path: "/main/employees",
    content: "Employees",
    icon: bagIcon,
  },
  {
    path: "/main/settings",
    content: "Settings",
    icon: SettingsIcon,
  },
];

let router: any = null;
if (role === "superadmin" || role === "admin") router = superadmin;
// else if (role === "admin") router = admin;
else if (role === "hr") router = hr;
else router = [];
export default router;
