import { Button } from "./Button";
import '../styles/sidebar.scss';


export function SideBar({ genres, onClick, genId }) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClick(genre.id)}
            selected={genId === genre.id}
          />
        ))}
      </div>

    </nav>);
}