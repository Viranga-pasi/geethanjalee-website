import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Geethanjalee from './components/Geethanjalee';
import Nanasara from './components/Nanasara';
import Sahaodarapiyapath from './components/Sahaodarapiyapath';
import Contact from './components/Contact';
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/geethanjalee">
					<Geethanjalee />
				</Route>
				<Route path="/nanasara">
					<Nanasara />
				</Route>
				<Route path="/sahodarapiyapath">
					<Sahaodarapiyapath />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
