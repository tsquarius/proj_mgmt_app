export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: user
  })
);

export const fetchUsers = () => (
  $.ajax({
    url: '/api/users',
    method: 'GET'
  })
);

export const fetchUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET'
  })
); 

export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {user}
  })
);

export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);