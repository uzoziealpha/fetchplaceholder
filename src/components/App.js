import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Albums from './Albums';
import Photos from './Photos';
import Navbar from './Navbar'


class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
			  <Navbar/>
				<Switch>
					<Route path='/' exact component={Albums} />
					<Route path='/photos/:id' exact component={Photos} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
