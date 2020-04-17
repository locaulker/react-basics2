import React, {Component} from "react"

class Book extends Component {
	state = {
		count: 1,
		name: "John",
	}

	addCount = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}
	lowerCount = () => {
		this.setState({
			count: this.state.count - 1,
		})
	}
	resetCount = () => {
		this.setState({
			count: 0,
		})
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
					<h3>Count = {this.state.count}</h3>
					<h3>Count = {this.state.name}</h3>
					<button type="button" onClick={this.addCount}>
						Add Count
					</button>
					<button type="button" onClick={this.resetCount}>
						Reset Count
					</button>
					<button type="button" onClick={this.lowerCount}>
						Lower Count
					</button>
				</div>
			</article>
		)
	}
}

export default Book
