
import axios from 'axios';

const API_URL = '/api';

export interface Article {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  category?: string;
  author?: string;
  image?: string;
  date?: string;
  tags?: string[];
}

export const getArticles = async (): Promise<Article[]> => {
  const response = await axios.get(`${API_URL}/articles`);
  return response.data.docs;
};

export const getArticleById = async (id: string): Promise<Article> => {
  const response = await axios.get(`${API_URL}/articles/${id}`);
  return response.data;
};

export const getArticlesByCategory = async (category: string): Promise<Article[]> => {
  const response = await axios.get(`${API_URL}/articles`, {
    params: {
      where: {
        category: {
          equals: category
        }
      }
    }
  });
  return response.data.docs;
};
