
export const getUser = userName => {

  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(user => ({
      id:user.id,
      login:user.login,
      name:user.name,
      followers:user.followers,
      following:user.following,
      image:user.avatar_url
    }));
};
