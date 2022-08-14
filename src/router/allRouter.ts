import { FC } from "react";
import AlertPage from "../page/AlertPage";
import Home from "../page/Home";
import ModalPage from "../page/ModalPage";
import TablePage from "../page/tablepage/TablePage";

interface RoutersType {
  name: string;
  path: string;
  icon?: string;
  component: FC;
  children?: RoutersType[];
}

export const PageRouter: RoutersType[] = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
    component: Home,
  },
  {
    name: "Components",
    path: "/component",
    icon: "fa-solid fa-border-all",
    component: Home,
    children: [
      {
        name: "Table",
        path: "/table",
        icon: "fa-solid fa-table-cells",
        component: TablePage,
      },
      // {
      //   name: "Card",
      //   path: "/card",
      //   icon: "fa-solid fa-address-card",
      //   component: CardContainer,
      // },
      {
        name: "Modal",
        path: "/modal",
        icon: "fa-solid fa-fire",
        component: ModalPage,
      },
      {
        name: "Alert",
        path: "/alert",
        icon: "fa-solid fa-bell",
        component: AlertPage,
      },
    ],
  },
];