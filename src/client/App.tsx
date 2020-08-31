import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Books from './pages/Books';
import Details from './pages/Details';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';

const App: React.FC<IAppProps> = () => {
	return (
		<BrowserRouter>
			<Container>
			<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/books/details/:id">
						<Details />
					</Route>
					<Route exact path="/books/new">
						<Books />
					</Route>
					<Route exact path="/books">
						<Books />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<PrivateRoute exact path="/admin">
						<Admin />
					</PrivateRoute>
				</Switch>
			</Container>
		</BrowserRouter>	
	);
};

export interface IAppProps {}

export default App;