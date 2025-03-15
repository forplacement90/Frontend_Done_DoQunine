import React, { useState } from "react";
import axios from "axios";
import { Send, Loader2, Bot } from "lucide-react";
import HashLoader from "react-spinners/HashLoader";

import './chatBox.css';


const API_BASE_URL = "http://localhost:3002/api";

const ChatBot = () => {
    // const [prompt, setPrompt] = useState("");
    // const [response, setResponse] = useState("");
    // const [loading, setLoading] = useState(false);

    // const handleSubmit = async () => {
    //     if (!prompt.trim()) return;
    //     setLoading(true);
    //     setResponse("");
    //     try {
    //         const res = await axios.post(`${API_BASE_URL}/prompt-post`, { prompt });
    //         setResponse(res.data.response);
    //     } catch (error) {
    //         console.error("Error:", error);
    //         setResponse("Error fetching response.");
    //     }
    //     setLoading(false);
    // };

    // return (
    //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-200 p-4">
    //         <div className="p-6 max-w-lg w-full bg-white shadow-xl rounded-2xl border border-gray-300">
    //             <div className="flex items-center space-x-3 mb-4">
    //                 <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png" alt="AI Avatar" className="w-10 h-10 rounded-full" />
    //                 <h2 className="text-xl font-semibold text-gray-800">AI Chat</h2>
    //             </div>
    //             <div className="relative">
    //                 <textarea
    //                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
    //                     rows="3"
    //                     placeholder="Ask me anything..."
    //                     value={prompt}
    //                     onChange={(e) => setPrompt(e.target.value)}
    //                 />
    //                 <button 
    //                     className="absolute bottom-3 right-3 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
    //                     onClick={handleSubmit} 
    //                     disabled={loading}
    //                 >
    //                     {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
    //                 </button>
    //             </div>
    //             {response && (
    //                 <div className="mt-4 p-4 bg-gray-100 rounded-lg flex items-start space-x-3">
    //                     <Bot className="w-6 h-6 text-blue-500" />
    //                     <p className="text-gray-700">{response}</p>
    //                 </div>
    //             )}
    //         </div>
    //     </div>
    // );



    const [prompt, setPrompt] = useState("");
    const [qns, setQns] = useState("Hi");
    const [ans, setAns] = useState("Hello, how can i help you!");
    const [loading, setLoading] = useState(false);
    const [qnsClass, setQnsClass] = useState("show-qns");

    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=";
    const apiKey = import.meta.env.VITE_API_KEY;

    const sendingData = {
        "contents": [{
            "parts":[
                {"text": ""}
            ]
        }]
    };

    const handleInput = (event) => {
        // console.log(event.target.value);
        const inputValue = event.target.value;
        // setPrompt(event.target.value);
        sendingData.contents[0].parts[0].text = inputValue;
        

    }

    const getData = async () => {
        setQnsClass("hide-qns");
        setLoading(true);
        setAns("");
        setQns("");

        const data = axios.post(`${url}+${apiKey}`, sendingData)
        .then((res) => {
            // console.log("RES", res.data.candidates[0].content.parts[0].text);
            setAns(res.data.candidates[0].content.parts[0].text);
            setQns(sendingData.contents[0].parts[0].text);
            setLoading(false);
            setQnsClass("show-qns");
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }

    return (
        <div className="chat-container"> 
            <div className="data-container">
                <p className={qnsClass}>{qns}</p>
                <p className="ans">{ans}</p>
                <div className="loader">
                 <HashLoader loading={loading}/>
                </div>

            </div>

            <div className="input-container">
                <input type="text" placeholder="Ask with your AI friend" onChange={handleInput}/> <br/>
                <button onClick={getData}>Submit</button>
            </div>
        </div>
    )
};

export default ChatBot;
