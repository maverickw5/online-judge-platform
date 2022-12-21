import React from 'react'
import  "./CodeLink.scss"
import Judge from '../../../Judge/Judge';
import { Link } from 'react-router-dom';

function CodeLink() {
  return (
    <div className='codelink'>
        <Link className="" to="/judge">coding</Link> 
    </div>
  )
}

export default CodeLink;