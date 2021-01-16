import React from 'react'
import Product from "./Product"
export default function Products(props) {
	return ( 
		<>
			{props.data.map(elem => {
				return (
					<Product 
					key={elem.id}
					name={elem.name}
					memory={elem.memory}
					wifi={elem.wifi}
					imageUrl={elem.imageUrl}
					price={elem.price}
					/>
				)
			})}
		</>
	
	)
}
