import { useContext } from 'react'
import Main from './Main'
import Auth from './Auth'
import Profile from './Profile'
import NewsList from './NewsList'
import AuthContext from '../context/AuthContext';

export default function Authentication() {
	const { profile } = useContext(AuthContext);
	const { token } = useContext(AuthContext);

	return (
		<>
			<header className="header">
				<div className="logo">Neto Social</div>
				{!profile && <Auth />}
				{profile && <Profile />}
			</header>
			{!token && <Main />}
			{token && <NewsList />}
		</>
	)
}