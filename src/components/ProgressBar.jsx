import { useEffect, useState } from 'react';
export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);
    useEffect(() => {
        setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval();
                    return 0;
                }
                return prevTime - 10;
            });
        }, 10);
    }, [])
    return (
        <div className="progress-bar">
            <progress value={remainingTime} max={timer} />&nbsp;&nbsp;
            <span>{Math.round((remainingTime / timer) * 100)}%</span>
        </div>
    );
}