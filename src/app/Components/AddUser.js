"use client"
import React, { useState } from 'react';

const AddUser = () => {
    const [name, setName] = useState("");
    const userDispatch = (e) => {
        e.preventDefault();
        const name = e.target.name
        console.log(name);
    }
    return (
        <div className='border p-14'>
            <h2 className='text-5xl'>Add User :</h2>
            <form onSubmit={userDispatch} className='space-x-1'>
                <input onChange={(e) => { setName(e.target.value) }} className='border rounded-lg p-1 border-black' type="text" placeholder='add user' name='name' />
                <button type='submit' className=' px-3 py-1 bg-red-500 rounded-lg text-white'>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;