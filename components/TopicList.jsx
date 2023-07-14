import { FiEdit2 } from 'react-icons/fi';
import RemoveBtn from './elements/RemoveBtn';
import Link from 'next/link';
import { getTopics } from '@/libs/getTopics';

// const getTopics = async () => {
//   try {
//     const res = await fetch('http://localhost:3000/api/topics', {
//       cache: 'no-store',
//     });

//     if (!res.ok) {
//       throw new error('Error to load');
//     }

//     return res.json();
//   } catch (error) {
//     console.log('Error Loading: ', error);
//   }
// };
//!FIX-----
// export async function getStaticProps() {
//   const topics = await getTopics();
//   console.log(topics);
//   return {
//     props: {
//       topics,
//     },
//   };
// }

const TopicsList = async () => {
  const { topics } = await getTopics();
  //console.log(topics);
  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className='flex items-start justify-between gap-5 p-4 my-3 border bg-slate-200'>
          <div>
            <h2 className='text-2xl font-bold'>{t.title}</h2>
            <h2>{t.description}</h2>
          </div>
          <div className='flex gap-2'>
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <FiEdit2 size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
