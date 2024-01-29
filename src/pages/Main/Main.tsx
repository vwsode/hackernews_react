import React, { ChangeEvent, useEffect, useState } from 'react';

import Container from '@/components/Container/Container';
import Post from '@/components/Post/Post';
import TextField from '@/components/TextField/TextField';

import { useDebounce } from '@/hooks/useDebounce';
import { fetchNews } from '@/api/news';


interface Post {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: Date;
    source: Source;
}

interface Source {
    url: string;
    name: string;
}

const Main = () => {
    const [search, setSearch] = useState<string>('js');
    const [date, setDate] = useState<string>('');
    const [data, setData] = useState<Post[]>([]);
    const debouncedSearch = useDebounce(search);
    // 2022-08-21T16:27:09Z

    const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        const loadNews = async () => {
            const news = await fetchNews(debouncedSearch, date);
            setData(news.articles);
        }

        loadNews();
    }, [debouncedSearch]);

    return (
        <div>
            <Container>
                <TextField placeholder="Search news" value={search} onInput={onSearch} />
                {data.map((item) => (
                    <Post key={crypto.randomUUID()} title={item.title} path={item.url} />
                ))}
            </Container>
        </div>
    );
};

export default Main;
