import React from 'react'
import {getTotal} from './Helpers'
export default function Total(props) {
	return (
		<div>
			<p>{getTotal(props.data)}</p>
		</div>
	)
}
