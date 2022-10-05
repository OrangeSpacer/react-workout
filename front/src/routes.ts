import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import NewExercise from "./pages/NewExercise/NewExercise";
import NewWorkout from "./pages/NewWorkout/NewWorkout";
import Profile from "./pages/Profile/Profile";


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
    {
        path: '/new-exercise',
        component: NewExercise,
        auth: true
    },
    {
        path:'/profile',
        component: Profile,
        auth: true
    }
]