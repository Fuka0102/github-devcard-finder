import React from "react";

export default function Form () {

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);        
    }

    return (
        <>
            <input type="text" placeholder="input search word" onChange={onChangeValue}/>
            <button>search</button>
        </>
    );
}