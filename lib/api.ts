import axios from 'axios';
import type { Note, NewNote } from '../types/note';

interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}
interface FetchNotesParams {
  search?: string;
  page?: number;
  perPage: number;
  tag?: string;
}

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
const tags = ['all', 'Todo', 'Personal', 'Work', 'Meeting', 'Shopping'];

export const fetchNotes = async (
  tag: string,
  query?: string,
  page?: number,
): Promise<NotesHttpResponse> => {
  const baseUrl = 'https://notehub-public.goit.study/api/notes';

  if (!tags.includes(tag)) {
    throw new Error(`Invalid tag: ${tag}`);
  }

  const params: FetchNotesParams = {
    perPage: 12,
  };

  if (query) {
    params.search = query;
  }

  if (page) {
    params.page = page;
  }

  if (tag !== 'all') {
    params.tag = tag;
  }

  const response = await axios.get<NotesHttpResponse>(baseUrl, {
    headers: {
      Authorization: `Bearer ${myKey}`,
      accept: 'application/json',
    },
    params,
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
