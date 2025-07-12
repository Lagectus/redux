import {createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Settings from './pages/Settings';


export const router = createBrowserRouter([
    {path: '/',
        element: <Home />,
        errorElement: <div>Page not found</div>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path: '/user/:id',
        element: <User />,
        loader: async ({params}) =>{
            const  res = await fetch(`https://jsonplaceholdr.typicode.com/users/${params.id}`);
            if(!res.ok){
                throw new Error('User not found');
            }
            return res.json();

        },
        
        errorElement: <ErrorPage/>
    },
    {
        path: '/dashboard',
        element: <ProtectedRoute />,
        children: [
            {
                index: true,
                element: <Dashboard />
            }
        ]

    }
    
])