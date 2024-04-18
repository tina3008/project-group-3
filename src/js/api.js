import axios from 'axios';
const baseURL = 'https://portfolio-js.b.goit.study/api';

export async function fetchReviews(params) {
  const END_POINT = '/reviews';
  const url = `${baseURL}${END_POINT}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}


export async function fetchRequests(params) {
  const END_POINT = '/requests';
  const url = `${baseURL}${END_POINT}`;
  const requestData = {
    email: params.email,
    comment: params.comment,
  };
  try {
    const response = await axios.post(url, requestData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    iziToast.error({
      color: 'red',
      message: '❌ Sorry, there is a mistake. Please try again!',
      position: 'topRight',
    });
  }
}