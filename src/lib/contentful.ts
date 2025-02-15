const SPACE = import.meta.env.CONTENTFUL_SPACE_ID
const TOKEN = import.meta.env.CONTENTFUL_DELIVERY_TOKEN

import { createClient } from "contentful";

type Photograph = {
  name: string;
  description: string;
  photographer?: string;
  photographUrl: string;
};

const contentful_client = createClient({
  space: SPACE,
  accessToken: TOKEN,
});

const getAllPhotographs = async (): Promise<Photograph[]> => {
  try {
    const response = await contentful_client.getEntries({ content_type: 'photograph' });
    console.log(response)
    return response.items.map((item) => {
      const fields = item.fields as any;
      return {
        name: fields.name,
        description: fields.description,
        photographer: fields.photographer || 'Unknown',
        photographUrl: fields.photograph?.fields?.file?.url ? `https:${fields.photograph.fields.file.url}` : '',
      };
    });
  } catch (error) {
    console.error('Error fetching photographs:', error);
    return [];
  }
};

export const client = { getAllPhotographs }
