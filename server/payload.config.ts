import { Config } from 'payload/generated-types';

const config: Config = {
  serverURL: process.env.NODE_ENV === 'production' 
    ? 'https://your-production-url.com' 
    : 'http://localhost:5000',
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'articles',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          unique: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'status',
          type: 'select',
          options: [
            {
              value: 'draft',
              label: 'Draft',
            },
            {
              value: 'published',
              label: 'Published',
            },
          ],
          defaultValue: 'draft',
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'publishedDate',
          type: 'date',
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },
  ],
  db: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
  },
};

export default config;