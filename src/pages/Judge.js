import './css/Judge.css';
import { Link } from 'react-router-dom';
import CodeEditor from './components/CodeEditor';
import { TbArrowBackUp } from 'react-icons/tb';

function Judge() {
  return (
    <div className="Judge">
      <div className="content relative">
        <div className="container mx-auto p-4">
          <div className="flex items-center gap-2">
            <Link to='/'>
              <button><TbArrowBackUp size={25} /></button>
            </Link>
            <div className="pl-3">
              <h1>Challenge 1</h1>
            </div>
          </div>
        </div>
        <div className="body flex flex-row gap-2 pb-2">
          <div className="border-2 border-black basis-2/5 overflow-auto rounded-2xl">
            <iframe title="pdf" src="/media/11332.pdf#toolbar=0" frameBorder="0"></iframe>
          </div>
          <div className="basis-3/5 overflow-auto">
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judge;