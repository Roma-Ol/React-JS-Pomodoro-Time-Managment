import React, {useRef} from 'react';
import Countdown from 'react-countdown';

function Timer(props) {
    const clockRef = useRef();
    const handleStart = () => clockRef.current.start();

    const startingPoint = props.time * 1000 * 60;

    return (
        <>
            <Countdown date={Date.now() + startingPoint}
                       ref={clockRef}
                       autoStart={false}/>
            <button onClick={handleStart}>
                Start Clock
            </button>
        </>
    );
}

export default Timer;