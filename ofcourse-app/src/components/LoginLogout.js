import React from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { logout } from '../actions';

const LoginLogout = ({ currentUser, logout }) => {
	const performAction = () => {
		if(currentUser) {
			logout();
		} else {
			navigate('/login');
		}
	}
	return (
		<button 
			className="LoginLogout"
			onClick={performAction}
		>
			{currentUser ? 'Logout' : 'Login'}
		</button>
	);
};

const mapStateToProp = state => ({
	currentUser: state.user.user
});
const mapDispatchToProp = {
	logout
}

export default connect(mapStateToProp, mapDispatchToProp)(LoginLogout);
