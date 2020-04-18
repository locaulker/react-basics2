import React from "react"

export default function Buttons({handleDelete}) {
	return (
		<button
			type="button"
			style={
				{
					background: "orange",
					color: "white", 
					fontSize: "1.5rem",
					borderRadius: '5px',
					padding: '.5rem 1rem',
					border: '1px dashed purple'
				}
			} onClick={handleDelete}
		>
			Delete Me
		</button>
	)
}
