import axios from 'axios';
import type { Note, NewNote } from '../types/note';

interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

import { notFound } from 'next/navigation';
const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
const tags = ['All', 'Todo', 'Personal', 'Work', 'Meeting', 'Shopping'];

export const fetchNotes = async (
  query: string,
  page: number,
  tag: string,
): Promise<NotesHttpResponse> => {
  const baseUrl = 'https://notehub-public.goit.study/api/notes';

  if (!tags.includes(tag)) {
    return notFound();
  }
  const url = tag !== 'All' ? `${baseUrl}?tag=${tag}` : baseUrl;

  const response = await axios.get<NotesHttpResponse>(url, {
    headers: {
      Authorization: `Bearer ${myKey}`,
      accept: 'application/json',
    },
    params: {
      search: query,
      page,
      perPage: 12,
    },
  });

  return {
    notes: response.data.notes,
    totalPages: response.data.totalPages,
  };
};

export const createNote = async (newNote: NewNote): Promise<Note> => {
  const response = await axios.post<Note>(
    'https://notehub-public.goit.study/api/notes',
    newNote,
    {
      headers: {
        Authorization: `Bearer ${myKey}`,
        accept: 'application/json',
      },
    },
  );
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${myKey}`,
        accept: 'application/json',
      },
    },
  );
  return response.data;
};

export const fetchNoteById = async (id: Note['id']) => {
  const response = await axios.get<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${myKey}`,
        accept: 'application/json',
      },
    },
  );
  return response.data;
};
