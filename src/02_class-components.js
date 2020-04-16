import React, {Component} from "react"
import {name, age, person} from "./data"
import "./App.css"
import Banner from './components/header/Banner'

class App extends Component {
	render() {
		return (
			<section>
				<Banner />
				<p>This is my content</p>
				<p>{name}</p>
				<p>{age}</p>
				<hr />
				<p>{person.name}</p>
				<p>{person.age}</p>
			</section>
		)
	}
}

export default App
