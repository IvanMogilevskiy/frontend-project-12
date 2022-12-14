import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru.js';

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: 'ru',
    resources: {
      ru,
    },
    debug: true,
  });

export default i18next;
