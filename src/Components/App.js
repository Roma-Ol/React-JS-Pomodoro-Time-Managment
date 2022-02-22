import '../App.css';

import {Component} from "react";
import Header from "./Header/Header";
import Timer from "./Timer/Timer";
import Footer from "./Footer/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
        }
    }

    render() {
        return (
            <div className="App">
                {/*<Confetti/>*/}
                <Header/>
                <Timer/>
                <Footer/>
            </div>
        );
    }
}

export default App;
