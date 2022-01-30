import {Component} from "react";

class CountDown extends Component {
    constructor(props) {
        super(props);
    }

render() {
    let hours;
    if (this.props.hours !== 0) {
        hours = <p>{this.props.hours}</p>
    }
        return (
            <div>
                {hours}
                <p>{this.props.minutes}</p>
            </div>
        )
    }
}

export default CountDown;