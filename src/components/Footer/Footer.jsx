import { Container } from "../Container/Container";
import style from './Footer.module.css'

export const Footer = () => {
 
  return (
    <footer id="footer" className={style.footer}>
      <Container>
        <div className={style.footerWrap}>
          <p>Copyright 2023</p>
          <ul className={style.footerListLinks}>
            <li>
              <a href="https://www.instagram.com/" className={style.footerLink}>Instagram</a>
            </li>
            <li>
              <a href="https://www.youtube.com/" >Youtube</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
