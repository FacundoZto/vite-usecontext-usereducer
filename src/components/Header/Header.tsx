const Header: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <header>
      <h1>React list 🛒</h1>
      {children}
    </header>
  );
};

export default Header;