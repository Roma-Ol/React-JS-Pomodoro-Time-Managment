import React from "react";

class Preferences extends React.Component {
    handleSubmit(e) {
        const val = e.target.value;
        this.props.changePreference(val);
    }

    render() {
        return (
            <div>
                <label>
                    Time to keep focusing:
                    <input type="number"
                           defaultValue={this.props.defaultValue}
                           onChange={e => this.handleSubmit(e)}
                    />
                </label>
            </div>
        )
    }
}

export default Preferences;