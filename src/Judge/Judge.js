import './Judge.css';
import { Link } from 'react-router-dom';
import CodeEditor from './components/CodeEditor';
import { TbArrowBackUp } from 'react-icons/tb';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const baseURL = "";

function Judge() {
  const [blur, setBlur] = useState("blur(0)");
  const [documentURL, setDocumentURL] = useState("");
  const getProblemDoc = (() => {
    axios
      .post("http://localhost:8080/problemdoc", {
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
        .post("http://localhost:8080/randomproblemid", {
          userID: "5hwf65vWB6zSqf2rFVd5"
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
        <div className="container mx-auto p-4 flex flex-row gap-3">
          <div className='basis-2/5 flex flex-col'>
            <div className="flex flex-row pb-1">
              <Link to='/'>
                <button className='pt-1 pl-2 pr-4 transition ease-in-out delay-50 hover:scale-110'><TbArrowBackUp size={23} /></button>
              </Link>
              <div className="text-xl font-bold font-sans text-center">
                <h1>Problem #{sessionStorage.getItem("problemID")}</h1>
              </div>
            </div>
            <div className="border-2 border-black overflow-auto rounded-2xl">
              <iframe title="problemdoc" src={documentURL} frameBorder="0"></iframe>
            </div>
          </div>
          <div className="codeeditor basis-3/5 overflow-auto">
            <CodeEditor setBlur={setBlur} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judge;