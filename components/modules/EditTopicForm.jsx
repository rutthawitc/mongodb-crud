'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error('Failed to update topic!');
      }
      router.refresh();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} action='' className='flex flex-col gap-3'>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type='text'
        className='px-8 py-2 border border-slate-200'
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type='text'
        className='px-8 py-2 border border-slate-200'
      />
      <button className='px-2 py-4 text-white bg-green-400 rounded-md'>
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
