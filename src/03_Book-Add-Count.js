import React, {Component} from "react"

class Book extends Component {
	//constructor(props) {
	//	super(props)
	//	this.handleClick = this.handleClick.bind(this)
	//}

	state = {
		count: 1,
	}

	//handleClick() {
	//	console.log("You clicked me!")
	//	console.log(this.state.count)
	//}

	handleClick = () => {
		console.log("You Clicked me!")
		console.log(this.state.count)
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
					<button type="button" onClick={this.handleClick}>
						Add Count
					</button>
				</div>
			</article>
		)
	}
}

export default Book
