import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'fr'; //travailler là dessus pour changer en anglais ?
 
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});