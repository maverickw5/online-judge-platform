import './SubmitPopup.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SubmitPopup(props) {
    useEffect(() => {
        props.submitCode();
        props.setBlur("blur(5px)");
    }, []);

    if (props.isSucceed) {
        //when closed, set isSuceed to false, set blur to 0
        return (
            <div className="popup border-2 border-black rounded-2xl bg-green-300">
                <div className='p-4'>
                    Congratulations!
                </div>
            </div>
        );
    } else {
        return (
            <div className="popup border-2 border-black rounded-2xl bg-red-300">
                <div className='p-4'>
                    Try again!
                </div>
            </div>
        );
    }
};

export default SubmitPopup;