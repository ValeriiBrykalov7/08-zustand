'use client';

import css from './BackButton.module.css';
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  return (
    <button className={css.backBtn} onClick={() => router.back()}>
      Back
    </button>
  );
}
