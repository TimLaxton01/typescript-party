import React, { useState } from "react";

const AddToList = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='Name'
        className='AddToList-input'
        value={input.name}
        onChange={handleChange}
        name='name'
      />
      <input
        type='text'
        placeholder='Age'
        className='AddToList-input'
        value={input.age}
        name='age'
      />
      <input
        type='text'
        placeholder='Image Url'
        className='AddToList-input'
        value={input.img}
        name='img'
      />
      <textarea
        placeholder='Note'
        className='AddToList-input'
        value={input.note}
        name='note'
      />
    </div>
  );
};

export default AddToList;
