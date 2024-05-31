import React, { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState('');

	const nameUser = (name) => {
		setUser(name);
	};

	return (
		<UserContext.Provider value={{ nameUser, user }}>
			{children}
		</UserContext.Provider>
	);
};
