import React, { useEffect } from "react";
import {useNavigate, useRoutes} from 'react-router-dom'

// Pages List
import Dashboard from "./components/Dashboard";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

// Auth Context
import { useAuth } from "./authContext";
import Repository from "./components/repository/Repository";
import Message from "./components/message/Message";
import Profile from "./components/Profile/Profile";
import CreationPage from "./components/CreationPage/CreationPage";
import { Error } from "./components/error/Error";
import ViewRepo from "./components/view Repository/ViewRepo";
import ChatBot from "./components/chatbot ai/ChatBot";




const ProjectRoutes = ()=>{
    const {currentUser, setCurrentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        const userIdFromStorage = localStorage.getItem("userId");

        if(userIdFromStorage && !currentUser){
            setCurrentUser(userIdFromStorage);
        }

        if(!userIdFromStorage && !["/auth", "/signup"].includes(window.location.pathname))
        {
            navigate("/auth");
        }

        if(userIdFromStorage && window.location.pathname=='/auth'){
            navigate("/");
        }
    }, [currentUser, navigate, setCurrentUser]);

    let element = useRoutes([
        {
            path:"/",
            element:<Dashboard/>
        },
        
        
        {
            path:"/auth",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<Signup/>
        },
        {
            path:"/repo/create",
            element:<Repository/>
        },
        {
            path:"/message",
            element:<Message/>
        },
        {
            path:"/profile",
            element:<Profile/>
        },
        {
            path:"/creationDetials",
            element:<CreationPage/>
        },
        {
            path:"/error",
            element:<Error/>
        },
        {
            path:"/viewRepository/:repoId",
            element:<ViewRepo/>
        },
        {
            path:"/chatbot",
            element:<ChatBot/>
        },
        
    ]);

    return element;
}

export default ProjectRoutes;