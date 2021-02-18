import React from 'react';
import { useGlobalContext } from "../GlobalContext";

const Input = () => {

    const { input, setInput } = useGlobalContext();

    const inputHandler = e => {
        setInput(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="input-box">
                <h2 className="input-title">Search for a cocktail</h2>
                <input 
                type="text"
                placeholder="Search..."
                value={input}
                onChange={inputHandler}
                />
            </div>
        </form>    
    );
}

export default Input;
