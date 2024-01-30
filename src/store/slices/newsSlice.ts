import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Post } from '@/types/types';
import { getNews } from '@/api/news';

interface NewsState {
    articles: Post[];
    loading: boolean;
    currentPage: number;
}

const initialState: NewsState = {
    articles: [],
    loading: false,
    currentPage: 0,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async (searchQuery: string) => {
    const response = await getNews(searchQuery, '2');
    return response.articles;
});

export const fetchNewsByPage = createAsyncThunk(
    'news/fetchByPage',
    async ({ searchQuery, page }: { searchQuery: string; page: number }) => {
        const response = await getNews(searchQuery, '2');
        return response.articles;
    },
);

const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        addNews: (state, action: PayloadAction<Post>) => {
            state.articles.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload;
            })
            .addCase(fetchNews.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchNewsByPage.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNewsByPage.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload;
            })
            .addCase(fetchNewsByPage.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { addNews } = newsSlice.actions;

export default newsSlice.reducer;
