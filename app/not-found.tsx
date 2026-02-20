import css from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
  description: 'This page does not exist',
  openGraph: {
    title: 'Not Found',
    description: 'This page does not exist',
    url: 'https://08-zustand-tau-flax.vercel.app/not-found',
    images: [
      {
        url: 'https://support.heberjahiz.com/hc/en-us/articles/17596011205266-Error-404',
        width: 1200,
        height: 630,
        alt: 'NoteHub app',
      },
    ],
  },
};

const NotFound = () => {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
};

export default NotFound;
