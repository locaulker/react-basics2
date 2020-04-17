import React, {Component} from "react"
import Button from "./Buttons"

class Book extends Component {
	state = {
		count: 1,
		name: "John",
	}

	render() {
		//console.log(this.props);
		const {author, img, title} = this.props.info

		return (
			<article className="book">
				<img src={img} width="150" alt={title} />
				<div>
					<h4>Title: {title}</h4>
					<h6>Author: {author}</h6>
					<Button />
				</div>
			</article>
		)
	}
}

export default Book
