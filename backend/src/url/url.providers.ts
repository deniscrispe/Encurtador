import { Url } from './entities/url.entity';

export const urlProviders = [
  {
    provide: 'URL_REPOSITORY',
    useValue: Url,
  },
];