
//this.setState({})

// Important Array methods that are used in React
// map -> Iterates on each element in an array. returns a new array
// filter -> returns a new array based on certain conditions
// reduce -> reduces an array to a single value
// forEach -> loops through an array BUT DOES NOT create a new array

import React, {Component} from "react"
import Book from "./Book"
import bookData from "./bookData"

class BookList extends Component {
	
	//constructor(props) {
	//	super(props)
	//	this.state = {
	//		books: bookData,
	//	}
	//}


	state = {
		books: bookData,
	}

	render() {
		//const books = this.state.books.map((item) => item.book)
		//console.log(books);

		return (
			<section>
				<h3>This is a BookList</h3>
				{this.state.books.map((item) => (
					<Book key={item.id} info={item} />
				))}
			</section>
		)
	}
}

export default BookList
