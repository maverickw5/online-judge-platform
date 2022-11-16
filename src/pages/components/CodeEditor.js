import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-themes-all';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { BsPlayFill } from 'react-icons/bs';

function CodeEditor() {
    //Get input and output from cloud storage
    // const [submitInput, setsubmitInput] = useState();
    // const [answer, setAnswer] = useState();
    // useEffect(() => {
    //     fetch(inputfile)
    //     .then(r => r.text())
    //     .then(text => {
    //         setsubmitInput(text);
    //     });
    //     fetch(outputfile)
    //     .then(r => r.text())
    //     .then(text => {
    //         setAnswer(text);
    //     });
    // }, []);
    //Language selector
    const [lang, setLang] = useState("cpp");
    const getLang = (() => {
        if (lang==="python") {
            return python();
        } else if (lang==="cpp") {
            return cpp();
        } else if (lang==="java") {
            return java();
        }
    })();
    //Get code from code editor
    const [code, setCode] = useState();
    const getCode = useCallback((value) => {
        setCode(value);
    }, []);
    //Run code using Compiler api
    const [output, setOutput] = useState();
    const runCode = () => {
        axios
            .post("http://localhost:5000/compile", { 
                code: code, 
                input: input, 
                lang: lang
            })
            .then(({data}) => setOutput(data));
    };
    //Get input
    const [input, setInput] = useState();
    //Submit code
    // const submitCode = () => {
    //     runCode();
    //     if (output === answer) {
    //         console.log("Success");
    //     }
    // };

    return (
        <div className="w-full h-full flex flex-col gap-2">
            <div className="basis-5 flex justify-between">
                <select className="border-2 border-black outline-none p-1 pr-3 rounded-md" onChange={e=>{setLang(e.target.value)}}>
                    <option value="cpp">C++</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                </select>
                <div className="border-2 border-black flex flex-row divide-x-2 divide-black rounded-md">
                    <button className="place-items-center p-1 pl-2 pr-2 text-white rounded-l bg-yellow-500" onClick={runCode}>
                        <BsPlayFill size={20} />
                    </button>
                    <button className="text-center p-1 pl-3 pr-3 text-white rounded-r bg-green-500" >
                        Submit
                    </button>
                </div>
            </div>
            <div className="basis-3/4 overflow-auto rounded-2xl text-left bg-black">
                <CodeMirror
                    value="/* Happy coding! */"
                    theme={dracula}
                    height="301px"
                    extensions={getLang}
                    onChange={getCode}
                />
            </div>
            <div className="basis-1/4 overflow-auto rounded-2xl grid grid-cols-2 divide-x divide-solid bg-black">
                <div className="text-center p-1 text-white overflow-auto">
                    Input
                    <div className="pl-2 pr-2 text-left">
                        <textarea placeholder=">" className="font-mono text-left text-sm outline-none resize-none overflow-hidden w-full h-13 bg-black" onChange={e=>{setInput(e.target.value)}}></textarea>
                    </div>
                </div>
                <div className="text-center p-1 text-white overflow-auto">
                    Output
                    <div className="font-mono text-left text-sm output pl-2 pr-2 text-white">
                        {output}    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;