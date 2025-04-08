import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = ({ onSearch }) => {
	const [textSearch, setTextSearch] = useState("");
	return (
		<div className="p-4 bg-black flex items-center justify-between">
			<div className="flex items-center space-x-4">
			<Link to="/">
				<h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
			</Link>
				<nav className="flex items-center space-x-4">
					<Link to="/" className="text-white">Home</Link>
					<Link to="/about" className="text-white">About</Link>
					<Link to="/contact" className="text-white">Contact</Link>
				</nav>
			</div>
			<div className="flex items-center space-x-4">
				<input type="text" placeholder="Search" className="px-3 py-2 text-black bg-white" onChange={(e) => setTextSearch(e.target.value)} value={textSearch}/>
				<Link to="/" className="px-3 py-2 text-white bg-red-600 cursor-pointer" onClick={() => onSearch(textSearch)}>Search</Link>
			</div>

			
		</div>
	);
};

export default Header;
