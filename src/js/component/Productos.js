import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const data = await fetch("https://fakestoreapi.herokuapp.com/products");
		const prods = await data.json();
		setList(prods);
	};

	return (
		<>
			<h1>Productos</h1>
			<ul>
				{list.map(item => (
					<li key={item.id}>{item.title} </li>
				))}
			</ul>
		</>
	);
};

export default Products;
