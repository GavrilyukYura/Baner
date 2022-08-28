import { BanerData } from './types/BanerData';
import { ResponseError } from './types/ReponseError';

const API_URL = 'https://solovey.com.ua/test/data.json';

export function getData(): Promise<BanerData | ResponseError> {
  return fetch(`${API_URL}`)
    .then(res => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}
