import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';

type NotesByCategoryProps = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: NotesByCategoryProps) => {
  const { slug } = await params;
  const category = slug?.[0];
  const response = await fetchNotes('', 1, category);

  return (
    <div>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </div>
  );
};

export default NotesByCategory;
