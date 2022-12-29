import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../Judge';

function Time(props) {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(true);

    useEffect(() => {
        var prevTime = Number(sessionStorage.getItem("time"));
        setTime(prevTime);
    }, []);

    useEffect(() => {
        window.onbeforeunload = () => {
            sessionStorage.setItem("time", time);
        };
    }, [time]);

    useEffect(() => {
        let interval;
        if (start) {
            interval = setInterval(() => {
                setTime((temp) => temp + 10);
            }, 10);
        } else if (!start) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [start]);

    useEffect(() => {
        if (props.isSucceed === 1) {
            setStart(false);
            axios
                .post(baseURL+"/usersucceed", {
                    userID: localStorage.getItem("userID"),
                    problemID: props.problemID,
                    minute: time / 60000
                })
                .then(({data}) => {
                    console.log(data);
                    setTime(0);
                })
                .catch(({err}) => {
                    console.log(err);
                })
        }
    }, [props]);

    return (
        <div className="text-end text-3xl font-sans">
            <span>
                {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
            </span>
            <span>
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span>
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
        </div>
    );
}

export default Time;