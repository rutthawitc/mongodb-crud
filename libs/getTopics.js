export async function getTopics() {
  // Fetch data from an external API endpoint
  const res = await fetch('http://localhost:3000/api/topics', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('failed to fetch data');
  //console.log('Get..');
  return res.json();
}

export async function getTopicByID(id) {
  // Fetch data from an external API endpoint
  const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('failed to fetch data');
  console.log(id);
  return res.json();
}
