import "./App.css";
import Navbar from "./components/Navbar";
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
import Heading from './components/Heading'
// import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Collections from "./components/Collections";

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
				</div>
			</div>
  );
}

export default App;
