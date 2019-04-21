import React from 'react';
import { connect } from 'react-redux';

const LoginLogout = ({ currentUser }) => {
	return (
		<button className="LoginLogout">
			{currentUser ? 'Logout' : 'Login'}
		</button>
	);
};

const mapStateToProp = state => ({
	currentUser: state.user.user
});

export default connect(mapStateToProp)(LoginLogout);
