import axios from 'axios';

export const API_KEY = 'f538d34c59bff15c9448be20eb9d2a0a';
export const BASE_URL = 'https://gnews.io/api/v4/';

export const getNews = async (q: string, date: string, max: number = 10, page: number = 1) => {
    const response = await axios.get(
        `${BASE_URL}search?q=${q}&max=${max}&page=${page}&lang=ru&apikey=${API_KEY}&from=${date}`,
    );

    const data = await response.data;
    return data;
};
