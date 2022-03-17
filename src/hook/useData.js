import React, { useState } from 'react';

const useData = () => {
    const [data, setData] = useState({});
    console.log(data);

    const AddInput = (value) => {
        if (value) {
            console.log(value);
            const val = { ...data, ...value };
            console.log(val);
            setData(val);
        }
        else {
            setData({});
        }

    }
    return {
        data,
        setData,
        AddInput,
    }
};

export default useData;