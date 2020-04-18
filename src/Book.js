import React, {Component} from "react"
//import Button from "./Buttons"

class Book extends Component {
	state = {
		count: 1,
		name: "John",
		showInfo: true
	}

	handleInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo
		})
	}

	render() {
		const {author, img, title} = this.props.info

		const checkInfo = (info) => {
			if( info === true) {
				return <p>Display the info here...</p>
			} else {
				return null
			}
		}

		return (
			<article className="book">
				<img src={img} width="150" alt={title} />
				<div>
					<h4>Title: {title}</h4>
					<h6>Author: {author}</h6>
					<button type="button" onClick={this.handleInfo}>
						Toggle Info
					</button>
					{/* Logical && */}
					{/*{this.state.showInfo && <p>Display info here, if true...</p>}*/}

					{/* Ternary Operator */}
					{/*{this.state.showInfo ? <p>Show this info...</p> : ''}*/}

					{/* If...else */}
					{ checkInfo(this.state.showInfo) }
				</div>
			</article>
		)
	}
}

export default Book
