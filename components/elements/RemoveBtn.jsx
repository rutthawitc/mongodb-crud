'use client';
import { useRouter } from 'next/navigation';
import { FiTrash2 } from 'react-icons/fi';
const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic} className='text-red-500'>
      <FiTrash2 size={24} />
    </button>
  );
};

export default RemoveBtn;
