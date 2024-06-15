import { httpClient } from '../httpClient';

export async function signin(params) {
  const { data } = await httpClient.post('/auth/signin', params);

  return data;
}