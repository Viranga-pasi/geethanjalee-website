import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Geethanjalee from './components/Geethanjalee';
import Nanasara from './components/Nanasara';
import Sahaodarapiyapath from './components/Sahaodarapiyapath';
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/geethanjalee">
					<Geethanjalee />
				</Route>
				<Route exact path="/nanasara">
					<Nanasara />
				</Route>
				<Route exact path="/sahodarapiyapath">
					<Sahaodarapiyapath />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
