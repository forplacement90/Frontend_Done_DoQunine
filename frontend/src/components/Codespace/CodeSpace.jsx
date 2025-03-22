import { useState } from "react";
import { Play, Save, Trash } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ResizablePanelGroup, ResizablePanel } from "../ui/resizable";
import Footer from "../Footer";
import SubComponent from "../SubComponent";

export default function CodeSpace() {
  const [code, setCode] = useState("<div class='text-red-500'>Hello, World!</div>");
  const [output, setOutput] = useState("");
  const [prevCode, setPrevCode] = useState("");

  const runCode = () => {
    if (code !== prevCode) {
      const formattedOutput = `
        <html>
          <head>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>body { font-family: sans-serif; padding: 10px; }</style>
          </head>
          <body>${code}</body>
        </html>
      `;
      setOutput(formattedOutput);
      setPrevCode(code);
    }
  };

  const saveAndShowOutput = () => {
    runCode(); // Save should also execute the code
  };

  const clearCode = () => {
    setCode("");
    setOutput("");
    setPrevCode("");
  };

  return (
    <>
    <SubComponent/>
    <div className="min-h-screen p-4 bg-blue-200 text-white mt-14 ">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-950">Logic Store CodeSpace</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[75vh]">
        {/* Code Editor Panel */}
        <Card className="bg-blue-600">
          <CardContent className="p-4 h-full">
            <Textarea
              className="w-full h-full text-white bg-blue-500 border-none resize-none"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write your HTML + Tailwind CSS + JavaScript code here..."
            />
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card className="bg-blue-700">
          <CardContent className="w-full h-full bg-white text-black p-4 overflow-auto">
            <iframe
              title="output"
              className="w-full h-full border-none"
              srcDoc={output}
            />
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        <Button onClick={runCode} className="bg-green-600 flex items-center gap-2">
          <Play size={16} /> Run
        </Button>
        <Button onClick={saveAndShowOutput} className="bg-blue-600 flex items-center gap-2">
          <Save size={16} /> Save & Show Output
        </Button>
        <Button onClick={clearCode} className="bg-red-600 flex items-center gap-2">
          <Trash size={16} /> Clear
        </Button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
