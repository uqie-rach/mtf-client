import "./header.css";
const Header = ({
  label = "Add label",
  title = "Add title",
  desc = "Add desc",
  classes = "text-left",
}) => {
  return (
    <header className={`${classes}`}>
      <p className="header-label">{label}</p>
      <h1 className="header-title">{title}</h1>
      <p className="text-desc">{desc}</p>
    </header>
  );
};

export default Header;
