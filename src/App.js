// React
import React, { Fragment, useEffect } from 'react';
// Redux
import store from './store';
import { Provider } from 'react-redux';
// Styling
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
// Components
import { AppSearchbar } from './components/layout/AppSearchbar';
import Logs from './components/logs/Logs';
import { AddBtn } from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import { EditLogModal } from './components/logs/EditLogModal';
import { AddTechModal } from './components/techs/AddTechModal';
import { TechListModal } from './components/techs/TechListModal';

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});

	return (
		<Provider store={store}>
			<Fragment>
				<AppSearchbar />
				<div className='container'>
					<AddBtn />
					<AddLogModal />
					<EditLogModal />
					<AddTechModal />
					<TechListModal />
					<Logs />
				</div>
			</Fragment>
		</Provider>
	);
};

export default App;
