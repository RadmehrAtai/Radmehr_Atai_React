import Home from "../pages/Home"
import Tasks from "../pages/Tasks"

const Router = [
    {
        component: <Home/>,
        path: "/",
        title: "Home",
        exact: true,
        isHeaderElement: true
    },
    {
        component: <Tasks/>,
        path: "/tasks",
        exact: true,
        title: "Tasks",
        isHeaderElement: true
    }
]

export default Router