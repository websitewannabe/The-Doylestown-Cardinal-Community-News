
import { buildConfig } from 'payload/config';
import path from 'path';

const config = buildConfig({
  serverURL: process.env.NODE_ENV === 'production' 
    ? 'https://' + process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + '.repl.co' 
    : 'http://localhost:3000',
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'username',
      },
      fields: [
        {
          name: 'username',
          type: 'text',
          required: true,
        },
      ],
    },
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
          name: 'excerpt',
          type: 'textarea',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'category',
          type: 'select',
          options: [
            { label: 'Live', value: 'live' },
            { label: 'Community', value: 'community' },
            { label: 'News', value: 'news' },
          ]
        },
        {
          name: 'author',
          type: 'text',
        },
        {
          name: 'image',
          type: 'text',
        },
        {
          name: 'date',
          type: 'date',
        },
        {
          name: 'tags',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text',
            }
          ]
        }
      ],
    },
    {
      slug: 'writers',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
        },
        {
          name: 'photo',
          type: 'text',
        }
      ],
    }
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../shared/payload-types.ts'),
  },
});

export default config;
