import React, {useState} from "react";

export default function Form () {
    const [value, setValue] = useState('');

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);        
    }
    
    const onSubmitSearch = () => {
        console.log(value);
    }

    const onEnterDown = (e: React.KeyboardEvent<HTMLInputElement> ) => {
        if (e.key === 'Enter') {
            onSubmitSearch();
        }
    }

    return (
        <>
            <input type="text" placeholder="input search word" onChange={onChangeValue} onKeyDown={onEnterDown}/>
            <button onClick={onSubmitSearch}>search</button>
        </>
    );
}