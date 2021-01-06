import React from 'react'
import s from './Product.module.css'
import {dollar} from './Helpers'
export default function Product(props) {
	return (
		<div className={s.pr__item}>
			<img src={props.imageUrl} alt="prImage"/>
			<div className={s.title}>
				<h1>{props.name}</h1>
				<p>{props.memory}GB{props.wifi ? "whith Wifi" : null}</p>
			</div>
			<button>
				{dollar(props.price, "$")}
			</button>
		</div>
	)
}
