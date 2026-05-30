import React, {useState} from "react";

export default function Form () {
    const [value, setValue] = useState('');

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);        
    }
    
    const onSubmitSearch = () => {
        console.log(value);
    }

    return (
        <>
            <input type="text" placeholder="input search word" onChange={onChangeValue} onKeyDown={onClickSearch}/>
            <button onClick={onSubmitSearch}>search</button>
        </>
    );
}