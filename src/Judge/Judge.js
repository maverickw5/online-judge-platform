import './Judge.css';
import { Link } from 'react-router-dom';
import CodeEditor from './components/CodeEditor';
import { TbArrowBackUp } from 'react-icons/tb';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const baseURL = "https://asia-east1-online-judge-platform-29469.cloudfunctions.net/api";

function Judge() {
  const [blur, setBlur] = useState("blur(0)");
  const [documentURL, setDocumentURL] = useState("");
  const getProblemDoc = (() => {
    axios
      .post(baseURL+"/problemdoc", {
        problemID: sessionStorage.getItem("problemID")
      })
      .then(({data}) => {
        setDocumentURL(data+"#toolbar=0");
      })
      .catch(({err}) => {
        console.log(err);
      })
  });
  
  useEffect(() => {
    if (sessionStorage.getItem("problemID") === null) {
      axios
        .post(baseURL+"/randomproblemid", {
          userID: "5hwf65vWB6zSqf2rFVd5" //localStorage.getItem("userID")
        })
        .then(({data}) => {
          sessionStorage.setItem("problemID", data);
          getProblemDoc();
        })
        .catch(({err}) => {
          console.log(err);
        })
    } else {
      getProblemDoc();
    }
  }, []);

  return (
    <div className="judge" style={{filter:`${blur}`}}>
      <div className="content">
        <div className="container mx-auto p-4 flex flex-row gap-3 h-full">
          <div className="basis-2/5 flex flex-col">
            <div className="flex flex-row pb-1">
              <Link to='/dashboard/pet'>
                <button className="pt-1 pl-2 pr-4 transition ease-in-out delay-50 hover:scale-110" onClick={() => {sessionStorage.clear();}}>
                  <TbArrowBackUp size={23} />
                </button>
              </Link>
              <div className="text-xl font-bold text-center">
                <h1>Problem #{sessionStorage.getItem("problemID")}</h1>
              </div>
            </div>
            <div className="h-full border-2 border-black overflow-auto rounded-2xl">
              <iframe title="problemdoc" src={documentURL} frameBorder="0"></iframe>
            </div>
          </div>
          <div className="h-full basis-3/5 overflow-hidden">
            <CodeEditor setBlur={setBlur} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judge;