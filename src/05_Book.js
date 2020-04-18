import React, {Component} from "react"
//import Button from "./Buttons"

class Book extends Component {
	state = {
		count: 1,
		name: "John",
	}

	render() {
		//console.log(this.props);
		const {id, author, img, title} = this.props.info
		const {handleDelete} = this.props
		//console.log(id);

		return (
			<article className="book">
				<img src={img} width="150" alt={title} />
				<div>
					<h4>Title: {title}</h4>
					<h6>Author: {author}</h6>
					<button type="button" onClick={() => handleDelete(id) }>Delete Me</button>
					{/*<Button handleDelete={handleDelete} />*/}
				</div>
			</article>
		)
	}
}

export default Book
