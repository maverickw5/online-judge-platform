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
        if (props.isSucceed) {
            setStart(false);
            // record to database
            // axios
            //     .post("http://localhost:8080/usersucceed", {
            //         userID: "5hwf65vWB6zSqf2rFVd5",
            //         problemID: props.problemID,
            //         minute: time / 60000
            //     })
            //     .then(({data}) => {
            //         console.log(data);
            //     })
            //     .catch(({err}) => {
            //         console.log(err);
            //     })
        }
    }, [props.isSucceed]);

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