const baseURL = process.env.VERCEL_URL ? process.env.VERCEL_URL : process.env.BASE_URL ? process.env.BASE_URL : '/';

export const getData = async (url, token) => {
  let res;
  if (token) {
    res = await fetch(`${baseURL}${url}`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });
  } else {
    res = await fetch(`${baseURL}${url}`, {
      method: 'GET',
    });
  }

  const data = await res.json();
  return data;
};

export const postData = async (url, post, token) => {
  let res;
  if (token) {
    res = await fetch(`${baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(post),
    });
  } else {
    res = await fetch(`${baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
  }
  const data = await res.json();
  return data;
};

export const putData = async (url, post, token) => {
  const res = await fetch(`${baseURL}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const patchData = async (url, post, token) => {
  const res = await fetch(`${baseURL}${url}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const deleteData = async (url, token) => {
  const res = await fetch(`${baseURL}${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  const data = await res.json();
  return data;
};
