import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Profile() {
  const { profile, handleLogout } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="profile__name">
        Hello, {profile.name}
      </div>
      <div className="profile__avatar">
        <img src={profile.avatar} alt={profile.name} />
      </div>
      <div className="profile__logout">
        <button className="profile__button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}