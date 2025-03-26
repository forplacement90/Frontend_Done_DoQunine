import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const UserDetail = () => {
 const navigate = useNavigate();
const [userDetails, setUserDetails] = useState({ username: "username" });
   
useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem("userId");

      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:3002/userProfile/${userId}`
          );
          setUserDetails(response.data);
        } catch (err) {
          console.error("Cannot fetch user details: ", err);
        }
      }
    };
    fetchUserDetails();
  }, []);

  return (
   
<div className="name font-medium">
 <h3>{userDetails.username}</h3>
          </div>



  )
}

export default UserDetail