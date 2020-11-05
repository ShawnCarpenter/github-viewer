import React from 'react';
import { useSelector } from 'react-redux';


const UserDetails = () => {
  const profile = useSelector(state => state.profile);
  const loading = useSelector(state => state.loading);

  if(loading) return <></>;
  return (
    <div>
      <h1>{profile.name}</h1>
      <a href={profile.url} rel="noreferrer" target="_blank" >
        <div>
      Github Profile
        </div>
        <img 
          src={profile.image}
          title={`Visit ${profile.url}\nOpens in new window`}
          alt={profile.name}/>
      </a>
      <p>Followers: {profile.followers}</p>
      <p>Following: {profile.following}</p>
    </div>

  );
};



export default UserDetails;
