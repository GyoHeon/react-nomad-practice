import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ medium_cover_image, id, title, summary, genres }) {
  return (
    <li>
      <img src={medium_cover_image} />
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </li>
  );
}

Movie.propTypes = {
  medium_cover_image: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
