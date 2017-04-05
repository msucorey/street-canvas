export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const demo = () => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user: {email: "guest@rws.com", password: "password"} }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const refresh = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/session`,
    data: { id: id }
  });
};
