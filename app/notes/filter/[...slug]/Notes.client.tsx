'use client';

import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

type NotesClientProps = {
  category: string;
};

export default function NotesClient({ category }: NotesClientProps) {
  const { data } = useQuery({
    queryKey: ['notes', '', 1, category],
    queryFn: () => fetchNotes('', 1, category),
    refetchOnMount: false,
  });

  const notes = data?.notes ?? [];

  return <div>{notes.length > 0 && <NoteList notes={notes} />}</div>;
}
