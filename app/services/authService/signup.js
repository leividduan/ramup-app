import { httpClient } from '../httpClient';

export async function signup(params) {
  const { data } = await httpClient.post('/auth/signup', params);

  return data;
}