import axios from 'axios'
import { BaseUrl } from './constants/Consts';

const instance = axios.create({
    baseURL: BaseUrl,
  });

export   default  instance