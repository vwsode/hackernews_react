import React, { InputHTMLAttributes } from 'react';

import s from './TextField.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const TextField: React.FC<Props> = ({ ...props }) => {
    return <input className={s.input} type="text" {...props} />;
};

export default TextField;
