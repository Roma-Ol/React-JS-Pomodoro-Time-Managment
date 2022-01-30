import './App.css';
import Input from "./Components/Input/Input";
import CountDown from './Components/CountDown/Countdown';
import Confetti from 'react-confetti';
import Sound from 'react-sound';
import LoFi from './Music/Lo-Fi-Wawes.mp3'
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            run: false
        }
    }

    getTimeRemain = (hours, minutes) => {
        this.setState({hours});
        this.setState({minutes})
        this.setState({run: true})

        this.startTimer(hours, minutes);
    }

    startTimer = (hours, minutes) => {
        if (this.state.hours !== 0) {
            this.setState({
                hours: this.state.hours-1
            })
        }

        if (this.state.minutes !==0) {
            this.setState({
                minutes: this.state.minutes - 1
            })
        }

        this.startTimer(this.state.hours, this.state.minutes);

    }

    render() {
        const {hours, minutes} = this.state;

        let countDown;
        if (this.state.run) {
            countDown = <CountDown
                            hours={hours}
                            minutes={minutes}/>
        }

        return (
            <div className="App">
                {/*<Confetti/>*/}
                <h2 className="page-heading">
                    Welcome
                </h2>
                <Input
                    getTimeRemain={this.getTimeRemain}/>
                {countDown}
            </div>
        );
    }
}

export default App;
