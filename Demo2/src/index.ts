
class Services {
  public searchMusic(term: string){
    return  fetch(`https://itunes.apple.com/search?term=${term}`,{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }});
  }
}

var svc  = new Services();
svc.searchMusic('John').then(response=>response.json()
          .then(d=>console.log(d)), error=> console.error(error));
