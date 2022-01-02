import Chat from "./components/Chat";
import Login from "./components/Login";
import { Chat_Route, Login_Route } from "./utilities/const";

export const publicRoutes = [
    {
        path: Login_Route,
        Component: Login 
    },
]

export const privateRoutes = [
    {
        path: Chat_Route,
        Component: Chat 
    }
]