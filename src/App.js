import "./App.css";
import Navbar from "./components/Navbar";
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
import Heading from './components/Heading'
import Menu from "./components/Menu";
import Collections from "./components/Collections";
import Contact from "./components/Contact";

function App() {
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
  );
}

export default App;
