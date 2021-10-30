import React, { Component } from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class App extends Component {


    state = {
        countries: [
            ["America", 5],
            ["Germany", 6],
            ["Sweden", 7],
            ["Turkey", 8]
        ],

        cities:[
            [5, ["New York", "California","Texas","Miami"]],
            [6, ["Berlin", "Munih","Hamburg"]],
            [7, ["Stockholm", "Malmo"]],
            [8, ["Istanbul"]]
        ],
        selectedCountry:"none"
    };

    handleSelect = (e) => {
        console.log(e);
        this.setState({selectedCountry:e})
    }

    bindCityList() {
        return this.state.countries.map((item) => {
            return <Dropdown.Item eventKey={item[1]}>{item[0]}</Dropdown.Item>
        })
    }

    render() {
        return (
            <div className="container">
                <DropdownButton id="dropdown-basic-button" title="Select a country" onSelect={this.handleSelect}>
                    {this.bindCityList()}
                </DropdownButton>
                <h4>Selected : {this.state.selectedCountry}</h4>
            </div>
        );

        //https://react-bootstrap.github.io/components/dropdowns/#menu-dividers
    }
}

export default App