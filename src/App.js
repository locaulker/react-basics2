import React from "react"
//import {name, age, person} from "./data"

// Using wild card '*'
import * as data from "./data"

import "./App.css"

function App() {
	return (
		<section>
			<p>This is my content</p>
			<p>{data.name}</p>
			<p>{data.age}</p>
			<hr />
			<p>{data.person.name}</p>
			<p>{data.person.age}</p>
		</section>
	)
}

export default App
