import '../App.css';

import {Component} from "react";
import Header from "./Header/Header";
import Preferences from "./Preferences/Preferences";
import Timer from "./Timer/Timer";
import Footer from "./Footer/Footer";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startPoint: 25,
        }
    }

    changePreference = (time) => {
        this.setState({
            startPoint: time
        })
    }

    render() {
        const time = new Date();


        return (
            <div className="App">
                <Header/>
                <Preferences
                    changePreference={this.changePreference}
                    defaultValue={this.state.startPoint}/>
                <Timer time={this.state.startPoint}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
