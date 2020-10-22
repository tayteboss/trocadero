import { BsFilePost } from 'react-icons/bs';

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: BsFilePost,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Body Copy',
      name: 'body',
      type: 'richText',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'figure',
    },
  ],
};
