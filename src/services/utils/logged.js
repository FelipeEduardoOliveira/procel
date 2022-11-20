export const logged = (isLogged) =>{
    localStorage.setItem('isLogged', JSON.stringify({isLogged}));
  }