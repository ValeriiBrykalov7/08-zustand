import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Valerii Brykalov</p>
          <p>
            Contact me:
            <a href='mailto:brival1005@gmail.com'> brival1005@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
