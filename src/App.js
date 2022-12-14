import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Footer from './components/Footer/Footer';
import News from './pages/News';
function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/contact" exact component={SignUp} />
				<Route path="/news" exact component={News} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
