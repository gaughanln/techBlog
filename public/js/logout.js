const logout = async () => {
  const response = await fetch('/api/users/logout', { //update route?
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // update?
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
