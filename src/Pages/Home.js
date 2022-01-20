import React from 'react'
import Heading from './components/Heading'
import Menu from "./components/Menu";
import Collections from "./components/Collections";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


const Home = () => {
    return (
        <div className="container">
				<div className="App">
						<Navbar />
						<Heading />
					</div>
				<div className="flex-column">
					<Menu />
					<Collections />
					<Contact />
				</div>
			</div>
    )
}

export default Home
