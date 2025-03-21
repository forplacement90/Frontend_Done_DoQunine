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

import ViewRepo from "./components/view Repository/ViewRepo";
import ChatBot from "./components/chatbot ai/ChatBot";
import ContactUs from "./components/contact _us/ContactUs";
import LogicStoreDocs from "./components/LogicStore Docs/LogicStoreDocs";
import Community from "./components/Community/Community";
import CodeSpace from "./components/Codespace/CodeSpace";
import Organization from "./components/organization/Organization";
import NewGrid from "./components/coming-soon/NewGrid";
import NewProject from "./components/coming-soon/NewProject";
import ImportRepository from "./components/coming-soon/ImportRepository";
import Issue from "./components/coming-soon/Issue";
import Pulls from "./components/coming-soon/Pulls";
import NotFoundPage from "./components/error/NotFoundPage";





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
            element: <NotFoundPage/>
        },
        {
            path:"/viewRepository/:repoId",
            element:<ViewRepo/>
        },
        {
            path:"/chatbot",
            element:<ChatBot/>
        },
        {
            path:"/contact-us",
            element:<ContactUs/>
        },
        {
            path:"/Logic-Store-Docs",
            element:<LogicStoreDocs/>
        },
        {
            path:"/community",
            element:<Community/>
        },
        {
            path:"/codespace",
            element:<CodeSpace/>
        },
        {
            path:"/organization",
            element:<Organization/>
        },
        {
            path:"/new grid",
            element:<NewGrid/>
        },
        {
            path:"/new-project",
            element:<NewProject/>
        },
        {
            path:"/import-repo",
            element:<ImportRepository/>
        },
        {
            path:"/issues",
            element:<Issue/>
        },
        {
            path:"/pulls",
            element:<Pulls/>
        },
    ]);

    return element;
}

export default ProjectRoutes;