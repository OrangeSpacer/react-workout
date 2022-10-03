import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import NewWorkout from "./pages/NewWorkout/NewWorkout";


export const routes:{path:string,component: () => JSX.Element,auth?:boolean}[] = [
    {
        path: '/',
        component: Home,
        auth:false
    },
    {
        path: '/auth',
        component: Auth,
        auth:false
    },
    {
        path: '/new-workout',
        component: NewWorkout,
        auth:true
    },
]