import AuthContext from '../context/AuthContext';
import {useState, useContext} from 'react'

export default function Auth () {
	const { handleLogin } = useContext(AuthContext);
	const EMPTY_STATE = { login: '', password: '' };
	const [form, setForm] = useState(EMPTY_STATE);

	const handlerChange = (event) => {
		const { name, value } = event.target;
    	setForm(prevState => ({ ...prevState, [name]: value }));
	}

	const sendAuth = (event) => {
		event.preventDefault();
    	handleLogin(form);
    	setForm(EMPTY_STATE);
	}

	return (
		<div>
			<input type="text" name="Username" className="input" placeholder="Userame" onChange={handlerChange}/>
			<input type="password" name="Password" className="input" placeholder="Password" onChange={handlerChange}/>
			<button className="button" onClick={sendAuth}>Login</button>
		</div>
	)
}