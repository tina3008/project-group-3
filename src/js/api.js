import axios from 'axios';

const baseURL = 'https://portfolio-js.b.goit.study/api/reviews';

export async function fetchReviews(params) {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
