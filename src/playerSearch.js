import { API_BASE_URL } from './config';

export const _search = (category, position, name)  =>
 {

    const serverURL = `${API_BASE_URL}/${category}/${position}`;


  return fetch(`${serverURL}?name=${name}`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => {

    let players=[];
    data.forEach(player => {
        if (player.Name.includes(name)){
            players.push(player);
        }

    });

      return players;
  })
  .catch (err => console.log(err));
}
  
export function search(category, position, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_search(category, position, name)), 500);
    });
}