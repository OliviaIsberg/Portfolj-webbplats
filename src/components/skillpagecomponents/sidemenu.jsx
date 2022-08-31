import { Link } from 'react-router-dom';
import '../../css/Skills/sideMenu.css';

export default function SideMenu() {
  return (
    <div className="container">
      <div className="buttons">
        <Link to="/skills/ScrumPage">
          <button className="scrumMaster">Scrummästare</button>
        </Link>
        <Link to="/skills/DeveloperPage">
          <button className="Developer">Utvecklare </button>
        </Link>
        <Link to="/skills/DesignPage">
          <button className="Designer">Designer</button>
        </Link>
      </div>
    </div>
  );
}
