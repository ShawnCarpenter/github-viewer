import React from 'react';
import { useSelector } from 'react-redux';


const UserDetails = () => {
  const profile = useSelector(state => state.profile);
  const loading = useSelector(state => state.loading);

  if(loading) return <></>;
  return (
    <div>
      <h1>{profile.name}</h1>
      <a href={profile.url} rel="noreferrer" target="_blank" >Github Profile</a>
      <img src={profile.image} alt={profile.login} />
    </div>

  );
};



export default UserDetails;
