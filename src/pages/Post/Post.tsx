import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { decrement, increment, incrementAsync } from '@/store/slices/counterSlice';

const Post = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <button onClick={() => dispatch(incrementAsync(10))}>Decrement</button>
            Post {count}
            <button onClick={() => dispatch(decrement())}>Increment</button>
        </div>
    );
};

export default Post;
