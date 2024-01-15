import React from 'react';

import s from './Post.module.scss';

const Post = () => {
    return (
        <div className={s.post}>
            <a className={s.post__title} href="">
                ICO fines HelloFresh £140k for spam texts and emails
            </a>
            <div className={s.post__details}>
                <div className={s.post__detail}>
                    <span className={s.post__points}>197 points</span>
                </div>
                <div className={s.post__detail}>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        className={s['post__detail-icon']}
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                    </svg>
                    <span className={s.post__time}>1 hour ago</span>
                </div>
                <a className={s.post__detail}>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        className={s['post__detail-icon']}
                    >
                        <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
                        <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
                    </svg>
                    <span className={s.post__comments}>1 comment</span>
                </a>
            </div>
        </div>
    );
};

export default Post;
