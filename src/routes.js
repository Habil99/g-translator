import {Main, Translate} from "./pages";

export const routes = [
  {
    id: 0,
    name: "Home",
    path: "/",
    component: <Main />,
    exact: true,
  },
  {
    id: 1,
    name: "Translate",
    path: "/translate",
    component: <Translate />
  }
]
