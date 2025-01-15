import style from './Footer.module.css';
import {FiltersType} from '../../Interfaces/Product';

type FooterProps = {
  filters: FiltersType;
};

const Footer: React.FC<FooterProps> = ({filters}) => {
  return (
    <footer className={style.footer}>
      <h4>Shooping Cart con useContext & useReducer</h4>
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  );
};

export default Footer;