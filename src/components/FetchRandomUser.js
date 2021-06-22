import React from "react";
import Button from 'react-bootstrap/Button';

export default class FetchRandomUser extends React.Component {

    state = {
        loading: true,
        person: null,
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false})
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
            <div>Loading...</div>) : (
            <div><Button href="/">Click me</Button><img src={this.state.person.picture.large} />{this.state.person.name.first} {this.state.person.name.last}</div>
            )
            }
            </div>
        );
    }
}