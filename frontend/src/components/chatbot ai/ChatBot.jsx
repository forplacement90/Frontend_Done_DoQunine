import React, { useState } from "react";
import axios from "axios";
import { Loader2, History } from "lucide-react";
import HashLoader from "react-spinners/HashLoader";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

const API_BASE_URL = "http://localhost:3002/api";

const ChatBot = () => {
    const [prompt, setPrompt] = useState("");
    const [qns, setQns] = useState("Hi");
    const [ans, setAns] = useState("Hello, how can I help you!");
    const [loading, setLoading] = useState(false);
    const [qnsClass, setQnsClass] = useState("show-qns");
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    const handleInput = (event) => {
        setPrompt(event.target.value);
    };

    const getData = async () => {
        if (!prompt.trim()) return;

        setQnsClass("hidden");
        setLoading(true);
        setAns("");
        setQns(prompt);

        try {
            const res = await axios.post(`${API_BASE_URL}/prompt-post`, { prompt });
            setAns(res.data.response);
            setHistory([...history, { question: prompt, answer: res.data.response }]);
        } catch (error) {
            console.error("Error:", error);
            setAns("Error fetching response.");
            setHistory([...history, { question: prompt, answer: "Error fetching response." }]);
        }

        setLoading(false);
        setQnsClass("block");
    };

    const handleHistoryClick = (item) => {
        setQns(item.question);
        setAns(item.answer);
    };

    return (
        <>
        <SubComponent/>
        <div className="w-full h-screen flex flex-col md:flex-row bg-gray-300 p-4 md:p-6 rounded-lg shadow-lg relative  mt-13">
            {/* Chat Section */}
            <div className="flex-1 flex flex-col p-6 bg-white rounded-lg shadow-lg border border-gray-300 ring-2 mr-3">
                <div className="flex-1 overflow-y-auto p-4 border-b border-gray-300">
                    <p className={`bg-blue-100 text-blue-800 rounded-lg p-4 mb-3 ${qnsClass} font-semibold`}>{qns}</p>
                    <p className={`p-4 text-gray-700 bg-gray-200 rounded-lg shadow-sm ${qnsClass}`}>{ans}</p>
                    <div className="flex justify-center mt-4">
                        <HashLoader loading={loading} color="#4A90E2" />
                    </div>
                </div>

                <div className="w-full rounded-lg shadow-md border-t border-gray-300 flex flex-col items-center p-4 bg-gray-50">
                    <input
                        type="text"
                        placeholder="Ask your AI friend..."
                        value={prompt}
                        onChange={handleInput}
                        className="w-full border border-gray-300 outline-none p-4 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 bg-blue-200 ring-1"
                    />
                    <button 
                        onClick={getData} 
                        disabled={loading} 
                        className="w-28 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg mt-4 flex items-center justify-center transition-all shadow-md"
                    >
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Submit"}
                    </button>
                </div>
            </div>
            
            {/* Toggle Button for History */}
            <button 
                onClick={() => setShowHistory(!showHistory)}
                className="absolute top-4 right-4 bg-black text-white p-2 rounded-lg shadow-md md:hidden lg:hidden mr-4 mt-1"
            >
                <History className="w-6 h-6" />
            </button>
            
            {/* History Section */}
            <div className={`w-full md:w-1/4 lg:w-1/4 h-full border-l border-gray-300 overflow-y-auto p-6 bg-gray-50 rounded-lg shadow-lg fixed right-0 top-0 transition-transform duration-300 ease-in-out 
                ${showHistory ? "translate-x-0" : "translate-x-full"} 
                md:translate-x-0 md:static lg:translate-x-0 lg:static ring-2`}
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left bg-blue-300 rounded-2xl">Chat History</h2>
                <ul className="flex-1 overflow-y-auto space-y-3">
                    {history.map((item, index) => (
                        <li 
                            key={index} 
                            className="p-4 bg-white rounded-lg shadow-1xl cursor-pointer hover:bg-blue-300 border border-gray-200"
                            onClick={() => handleHistoryClick(item)}
                        >
                            <p className="font-semibold text-gray-800">Q: {item.question}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ChatBot;
