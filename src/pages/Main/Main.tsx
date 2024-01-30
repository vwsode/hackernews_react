import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/store';
import { fetchNews } from '@/store/slices/newsSlice';

import { useDebounce } from '@/hooks/useDebounce';

import Container from '@/components/Container/Container';
import Post from '@/components/Post/Post';
import TextField from '@/components/TextField/TextField';
import Loader from '@/components/Loader/Loader';

import s from './Main.module.scss';

const Main = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { articles, loading } = useSelector((state: RootState) => state.news);
    const [search, setSearch] = useState<string>('js');
    const [page, setPage] = useState<number>(1);

    const debouncedSearch = useDebounce(search);

    const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        dispatch(fetchNews(search));
    }, [debouncedSearch]);

    console.log(page)

    return (
        <div>
            <Container>
                <TextField placeholder="Search news" value={search} onInput={onSearch} />
                {loading ? (
                    <Loader />
                ) : (
                    <div className={s.posts}>
                        {articles.map((item) => (
                            <Post key={crypto.randomUUID()} title={item.title} path={item.url} />
                        ))}
                    </div>
                )}
                <div className={s.pagination}>
                    <button onClick={() => setPage(page - 1)}>Prev</button>
                    <span>{page}</span>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </Container>
        </div>
    );
};

export default Main;
