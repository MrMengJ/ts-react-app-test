import React from 'react';
import { Button } from 'antd';

interface Props {
    name: string
}

function HelloFunction(props:Props) {
    return (
        <Button>Hello {props.name}</Button>
    );
}

HelloFunction.defaultProps = {
    name: "mengjin"
};

export default HelloFunction;
