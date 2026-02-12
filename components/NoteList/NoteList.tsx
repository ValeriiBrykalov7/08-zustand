'use client';

import css from './NoteList.module.css';
import type { Note } from '../../types/note';
import { useMutation } from '@tanstack/react-query';
import { deleteNote } from '@/lib/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <Link href={`/notes/${note.id}`} scroll={false}>
              View details
            </Link>
            <button
              className={css.button}
              onClick={() => mutation.mutate(note.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
