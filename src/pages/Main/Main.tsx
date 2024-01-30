import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/store';
import { fetchNews } from '@/store/slices/newsSlice';

import { useDebounce } from '@/hooks/useDebounce';

import Container from '@/components/Container/Container';
import Post from '@/components/Post/Post';
import TextField from '@/components/TextField/TextField';



const Main = () => {
    const dispatch = useDispatch<AppDispatch>();
    const articles = useSelector((state: RootState) => state.news.articles);
    const [search, setSearch] = useState<string>('js');
    const debouncedSearch = useDebounce(search);

    const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        dispatch(fetchNews(search));
    }, [debouncedSearch]);
    
    return (
        <div>
            <Container>
                <TextField placeholder="Search news" value={search} onInput={onSearch} />
                {articles.map((item) => (
                    <Post key={crypto.randomUUID()} title={item.title} path={item.url} />
                ))}
            </Container>
        </div>
    );
};

export default Main;
