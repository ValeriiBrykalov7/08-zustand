import Link from 'next/link';
import css from './SidebarNotes.module.css';

const SidebarNotes = () => {
  return (
    <ul className={css.menuList}>
      <li key='All' className={css.menuItem}>
        <Link href={`/notes/filter/All`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      <li key='Todo' className={css.menuItem}>
        <Link href={`/notes/filter/Todo`} className={css.menuLink}>
          Todo
        </Link>
      </li>
      <li key='Personal' className={css.menuItem}>
        <Link href={`/notes/filter/Personal`} className={css.menuLink}>
          Personal
        </Link>
      </li>
      <li key='Work' className={css.menuItem}>
        <Link href={`/notes/filter/Work`} className={css.menuLink}>
          Work
        </Link>
      </li>
      <li key='Meeting' className={css.menuItem}>
        <Link href={`/notes/filter/Meeting`} className={css.menuLink}>
          Meeting
        </Link>
      </li>
      <li key='Shopping' className={css.menuItem}>
        <Link href={`/notes/filter/Shopping`} className={css.menuLink}>
          Shopping
        </Link>
      </li>
    </ul>
  );
};

export default SidebarNotes;
