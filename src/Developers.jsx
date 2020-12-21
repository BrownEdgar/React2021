import React from 'react'
import PropTypes from "prop-types"

export default function Developers(props) {
	return (
		<div class={props.timeToChange ? "ddd" : "red"}>
			<p>{props.name}</p>
			<p>{props.age}</p>
			<button onClick={() => props.deleter(props.index)}>Delete</button>
		</div>
	)
}
Developers.propTypes = {
	deleter: PropTypes.func.isRequired,
	timeToChange: PropTypes.bool.isRequired
}
Developers.defaultProps = {
	age: 150
};