export const getRepos = userName => {

  return fetch(`https://api.github.com/users/${userName}/repos?per_page=100`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      id: repo.id,
      name: repo.name,
      url: repo.html_url,
      description: repo.description
    })));
};


export const getUser = userName => {

  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(user => ({
      id: user.id,
      login: user.login,
      name: user.name,
      url: user.html_url,
      image: user.avatar_url,
      number_repos: user.public_repos,
      followers: user.followers,
      following: user.following,
    }));
};
