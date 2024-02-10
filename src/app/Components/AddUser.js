import React from 'react';

const AddUser = () => {
    return (
        <div className='border p-14'>
            <h2 className='text-5xl'>User List:</h2>
            <div className='space-x-1'>
                <input className='border rounded-lg p-1 border-black' type="text" placeholder='add user' />
                <input type="button" className='px-3  py-1 bg-red-400 rounded-md text-white' value="Add User" />
            </div>
        </div>
    );
};

export default AddUser;