'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AddTopic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Title & Description are require!');
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.refresh();
        router.push('/');
      } else {
        throw new Error('Fail to add topic');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action='' onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type='text'
        placeholder='Topic Title'
        className='px-8 py-2 border border-slate-200'
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type='text'
        placeholder='Description'
        className='px-8 py-2 border border-slate-200'
      />
      <button
        type='submit'
        className='px-2 py-4 text-white bg-green-400 rounded-md'>
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
