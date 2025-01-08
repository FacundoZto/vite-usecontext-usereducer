import Filters from '../Filters/Filters';
import {FiltersType} from '../../Interfaces/Product';

type HeaderProps = {
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
};

const Header: React.FC<HeaderProps> = ({setFilters}) => {
  return (
    <header>
      <h1>React list 🛒</h1>
      <Filters setFilters={setFilters} />
    </header>
  );
};

export default Header;