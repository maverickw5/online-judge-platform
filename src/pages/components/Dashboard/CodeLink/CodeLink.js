import React from 'react'
import  "./CodeLink.scss"
import Judge from '../../../Judge/Judge';
import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';

function CodeLink() {
  return (
    <div className='codelink'>
        <div>10/20</div>
        <Link className="" to="/judge">challenge 1</Link>
        <Link className='' to="/judge">challenge 2</Link>
        <Link className='' to="/judge">challenge 3</Link>
    </div>
  )
}

export default CodeLink;