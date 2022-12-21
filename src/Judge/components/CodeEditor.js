import React, { useState, useCallback, useEffect } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-themes-all';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { BsPlayFill } from 'react-icons/bs';
import { baseURL } from '../Judge';
import Time from './Time';
import SubmitPopup from './SubmitPopup/SubmitPopup';

function CodeEditor(props) {
    //Get lang, code from sessionStorage
    useEffect(() => {
        var prevLang = sessionStorage.getItem("lang");
        var prevCode = sessionStorage.getItem("code");
        if (prevLang === null)
            prevLang = "cpp";
        if (prevCode === null)
            prevCode = "/* Happy Coding */";
        setLang(prevLang);
        setCode(prevCode);
    }, []);

    //Get selected lang, set CodeMirror lang package, set lang to sessionStorage
    const [lang, setLang] = useState("");
    const getLang = (() => {
        if (lang==="python3") {
            return python();
        } else if (lang==="cpp") {
            return cpp();
        } else if (lang==="java") {
            return java();
        }
    })();
    useEffect(() => {
        sessionStorage.setItem("lang", lang);
    }, [lang]);

    //Get code from code editor, set code to sessionStorage
    const [code, setCode] = useState("");
    const getCode = useCallback((value) => {
        setCode(value);
        sessionStorage.setItem("code", value);
    }, []);

    //Run code by API call
    const [input, setInput] = useState();
    const [output, setOutput] = useState();
    const runCode = () => {
        axios
            .post("http://localhost:8080/run", {
                code: code,
                input: input,
                lang: lang
            })
            .then(({data}) => {
                console.log(data); //delete
                setOutput(data.output);
            })
            .catch(({err}) => {
                console.log(err);
            })
    };

    //Submit code to API
    const [isSucceed, setIsSucceed] = useState(false);
    const submitCode = () => {
        // axios
        //     .post("http://localhost:8080/submit", {
        //         problemID: sessionStorage.getItem("problemID"),
        //         code: code,
        //         lang: lang
        //     })
        //     .then(({data}) => {
        //         console.log(data) //delete
        //         if (data === 'Success') {
        //             setIsSucceed(true);
        //             props.setBlur("blur(5px)");
        //         }
        //     })
        //     .catch(({err}) => {
        //         console.log(err);
        //     })
    };

    return (
        <div className="w-full h-full flex flex-col gap-2">
            <div className='pr-0.5'>
                <Time isSucceed={isSucceed} />
            </div>
            <div className="flex justify-between">
                <select value={lang} className="border-2 border-black outline-none p-1 pr-3 rounded-md transition ease-in-out delay-50 hover:scale-95" onChange={e=>{setLang(e.target.value)}}>
                    <option value="cpp">C++</option>
                    <option value="python3">Python</option>
                    <option value="java">Java</option>
                </select>
                <div className="border-2 border-black flex flex-row divide-x-2 divide-black rounded-md bg-black">
                    <button className="place-items-center p-1 pl-2 pr-2 text-white rounded-l bg-yellow-500 transition ease-in-out delay-50 hover:scale-95" onClick={runCode}>
                        <BsPlayFill size={20} />
                    </button>
                    <Popup trigger={
                        <button className="text-center p-1 pl-3 pr-3 text-white rounded-r bg-green-500 transition ease-in-out delay-50 hover:scale-95">
                            Submit
                        </button>
                    } modal nested>
                        <SubmitPopup submitCode={submitCode} isSucceed={isSucceed} setIsSucceed={setIsSucceed} setBlur={props.setBlur} />
                    </Popup>
                </div>
            </div>
            <div className="basis-3/4 overflow-auto rounded-2xl text-left bg-black">
                <CodeMirror
                    value={code}
                    theme={githubDark}
                    height="300px"
                    extensions={getLang}
                    onChange={getCode}
                />
            </div>
            <div className="basis-1/4 overflow-auto rounded-2xl grid grid-cols-2 divide-x divide-solid bg-black">
                <div className="text-center p-1 text-white overflow-auto">
                    Input
                    <div className="pl-2 pr-2 text-left">
                        <textarea placeholder=">" className="font-mono text-left text-sm outline-none resize-none overflow-hidden w-full h-14 bg-black" onChange={e=>{setInput(e.target.value)}}></textarea>
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