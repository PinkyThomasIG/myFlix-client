export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.image} alt={movie.title} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Description:</span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Genre:</span>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{movie.author}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
