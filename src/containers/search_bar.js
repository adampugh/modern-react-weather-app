import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";


class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ""
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // all events come with an event object
    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault();
        // calls action creator
        this.props.fetchWeather(this.state.term);
        // clears state input
        this.setState({
            term: ""
        });

    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Get a five day forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

// this allows this.props.fetchWeather to be used in the component
function mapDistpatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null is for mapStateToProps
export default connect(null, mapDistpatchToProps)(SearchBar);
