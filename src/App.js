import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
	state = {
		characters: []
	}

	removeCharacter = (index) => {
		const { characters } = this.state

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index
			}),
		})
	}

	handleSubmit = (character) => {
		this.setState({ characters: [...this.state.characters, character] })
	}

	render() {
		const { characters } = this.state
		return (
			<div className="container">
				<h1>React Tutorial</h1>
				<p>Add a character with a name and a job to the table.</p>
				<Table
					characterData={characters}
					removeCharacter={this.removeCharacter}
				/>
				<h3>Add New</h3>
				<Form handleSubmit={this.handleSubmit} />
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Accordion Item #1</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Accordion Item #2</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		);
	}
}

export default App