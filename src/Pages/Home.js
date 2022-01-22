import Navbar from "../components/Navbar";
import Heading from '../components/Heading'
import Menu from "../components/Menu";
import Collections from "../components/Collections";
import Contact from "../components/Contact";
import Footer from "../components/footer";

function Home() {
	return (
		<>
		<div className="App">
						<Navbar />
						<Heading />
					</div>
				<div className="flex-column">
					<Menu />
					<Collections />
					<Contact />
					<Footer />
				</div></>
  );
}

export default Home;