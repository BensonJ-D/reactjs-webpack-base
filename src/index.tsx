import React from 'react';
import ReactDOM from 'react-dom';
import Test from './component/test.jsx';
import './index.css';

//adding my imports
import "./styles/index.scss";

ReactDOM.render(
	<React.Fragment>
		<Test />
	</React.Fragment>, document.getElementById('root'));
