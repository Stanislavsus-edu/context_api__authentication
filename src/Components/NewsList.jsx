import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import useJsonFetch from '../hooks/useJsonFetch';
import News from './News';

export default function NewsList() {
	const { token } = useContext(AuthContext);

	const [data, loading] = useJsonFetch(`${process.env.REACT_APP_SERVER}/private/news`, {
    	headers: { 'Authorization': `Bearer ${token}` },
  	});

	return (
	    <div className="newsList">
	      {loading && (<div>Загрузка...</div>)}
	      {!loading && data && (
	        data.map((item) => <News key={item.id} data={item} />)
	      )}
	    </div>
	)
}