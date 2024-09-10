import axios from 'axios';

export const BASE_URL = 'https://purpleschool.ru/pizza-api-demo';

export const getAllPropduct = async () => {
  const { data } = await axios.get(`${BASE_URL}/products`);
  return data;
};

export const getProductByName = async (name: string) => {
  const { data } = await axios.get(`${BASE_URL}/products`, {
    params: {
      name,
    },
  });

  return data;
};

export const getProductById = async (productId: string) => {
  const { data } = await axios.get(`${BASE_URL}/products/${productId}`);
  return data;
};

export const handeleLogin = async (email: string, password: string) => {
  const { data } = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });

  return data;
};

export const handleRegister = async (
  email: string,
  password: string,
  name: string
) => {
  const { data } = await axios.post(`${BASE_URL}/auth/register`, {
    email,
    password,
    name,
  });

  return data;
};

export const getUserProfile = async (jwt: string) => {
  const { data } = await axios.get(`${BASE_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return data;
};
