import EditTopicForm from '@/components/modules/EditTopicForm';
import { getTopicByID } from '@/libs/getTopics';

const EditTopic = async ({ params }) => {
  const { id } = params;
  const { topic } = await getTopicByID(id);
  const { title, description } = topic;
  console.log(title, description);
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
