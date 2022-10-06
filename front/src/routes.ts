import Auth from "./pages/Auth/Auth";
import Exercises from "./pages/Exercises/Exercises";
import Home from "./pages/Home/Home";
import ListWorkouts from "./pages/ListWorkouts/ListWorkouts";
import NewExercise from "./pages/NewExercise/NewExercise";
import NewWorkout from "./pages/NewWorkout/NewWorkout";
import Profile from "./pages/Profile/Profile";
import SingleWorkout from "./pages/SingleWorkout/SingleWorkout";

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
    },
    {
        path: '/workout/:id',
        component:SingleWorkout,
        auth: true
    },
    {
        path: '/workouts',
        component:ListWorkouts,
        auth: true
    },
    {
        path:'/exercise/:id',
        component: Exercises,
        auth: true
    }
]