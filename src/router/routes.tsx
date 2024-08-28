import {
  CatgoryIcon,
  OwerviewIcon,
  usersGroupIcon,
  bagIcon,
} from "@drawer-icons";

const router = [
  {
    path: "/main",
    content: "Dashboard",
    icon: OwerviewIcon,
  },
  {
    path: "/main/empoylees",
    content: "Empoylees",
    icon: bagIcon,
  },
  {
    path: "/main/users",
    content: "Users",
    icon: usersGroupIcon,
  },
  {
    path: "/main/hr",
    content: "HR",
    icon: CatgoryIcon,
  },
];

export default router;
