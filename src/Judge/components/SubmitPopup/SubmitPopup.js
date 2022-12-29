import './SubmitPopup.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../Judge';
import { TbArrowBigUpLines } from 'react-icons/tb';
import { ImCoinDollar } from 'react-icons/im';
import { TbArrowBackUp } from 'react-icons/tb';

function SubmitPopup(props) {
    const [userscore, setUserscore] = useState();
    const [userlevel, setUserlevel] = useState();
    const [userexp, setUserexp] = useState();
    const [usermoney, setUsermoney] = useState();

    useEffect(() => {
        if (props.isSucceed === 1) {
            axios
                .post(baseURL+"/userdata", {
                    userID: localStorage.getItem("userID")
                })
                .then(({data}) => {
                    console.log(data)
                    setUserscore(data.score);
                    setUserlevel(data.level);
                    setUserexp(data.exp);
                    setUsermoney(data.money);
                })
                .catch(({err}) => {
                    console.log(err);
                })
        }
    }, [props]);
    
    if (props.isSucceed === 1) {
        return (
            <div className="popup border-4 border-black rounded-2xl bg-green-500">
                <div className='p-6 text-center'>
                    <h1 className='p-2 text-left text-3xl font-medium'>Success</h1>
                    <h2 className='p-3 text-3xl font-bold'>
                        New Score!
                    </h2>
                    <h2 className='text-8xl font-extrabold'>
                        {userscore}
                    </h2>
                    <div className='pt-8 pb-6 flex flex-row gap-32 justify-center'>
                        <div className='flex font-bold'>
                            <TbArrowBigUpLines size={30} />
                            <h3 className='pl-1 pt-1 text-xl'>Lv.{userlevel}</h3>
                        </div>
                        <div className='flex font-bold pl-1 pt-1 text-xl'>
                            <h3 className='font-extrabold pr-1.5'>XP</h3> 
                            {userexp}
                        </div>
                        <div className='flex font-bold'>
                            <ImCoinDollar size={30} />
                            <h3 className='pl-1 pt-0.5 text-xl'>{usermoney}</h3>
                        </div>
                    </div>
                    <Link to='/dashboard/pet'>
                        <button className="p-2 rounded-2xl font-bold bg-white transition ease-in-out delay-50 hover:scale-110" onClick={() => {sessionStorage.clear();}}>
                            Back to dashboard
                        </button>
                    </Link>
                </div>
            </div>
        );
    } else if (props.isSucceed === 0) {
        return (
            <div className="popup border-4 border-black rounded-2xl bg-red-500">
                <div className='p-6'>
                    <h1 className='p-2 text-3xl font-medium'>Fail</h1>
                    <h2 className='pt-10 text-center text-8xl font-extrabold'>
                        Try Again
                    </h2>
                    <div className='pt-12 text-center'>
                        <button className="transition ease-in-out delay-50 hover:scale-110" onClick={props.closeModal}>
                            <TbArrowBackUp size={70} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default SubmitPopup;