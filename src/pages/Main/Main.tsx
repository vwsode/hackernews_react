import React from 'react';

import Container from '@/components/Container/Container';
import Post from '@/components/Post/Post';

const Main = () => {
    return (
        <div>
            <Container>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </Container>
        </div>
    );
};

export default Main;
