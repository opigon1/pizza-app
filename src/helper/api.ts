import axios from "axios";

export const BASE_URL = 'https://purpleschool.ru/pizza-api-demo';

export const getAllPropduct = async() => {
    const { data } = await axios.get(`${BASE_URL}/products`);
    return data
}

export const getProductById = async(productId: string) => {
    const { data } = await axios.get(`${BASE_URL}/products/${productId}`);
    return data
}
