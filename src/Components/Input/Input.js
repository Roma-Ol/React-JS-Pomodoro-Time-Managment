import {Component, Fragment} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (e) => {
        e.preventDefault();
        let time = e.target.elements.time.value;

        const hours = parseInt(time.slice(0, time.indexOf(':')));
        const minutes = parseInt(time.slice(-2));

        this.props.getTimeRemain(hours, minutes);
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor='TimeInput'>Time u wanna keep focus.</label>
                    <input id='TimeInput' name="time" type="time" defaultValue='00:25'/>
                    <button type='submit'>Letsgooo</button>
                </form>
            </Fragment>
        )
    }
}

export default Input;
