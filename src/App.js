import "./App.css";
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				{/* {Location} */}
			</div>
		
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</BrowserRouter>
  );
}

export default App;
