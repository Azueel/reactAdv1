import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Home = () => {
	const { user } = useContext(UserContext);

	return <div>{user}</div>;
};
