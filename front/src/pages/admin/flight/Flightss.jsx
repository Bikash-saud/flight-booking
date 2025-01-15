import { Link } from "react-router-dom";

const MovieCard = ({ flight }) => {
  return (
    <div className="relative group m-[2rem]">
      <Link to={`/flight/${flight?._id}`}>
        <img
          src={flight?.image}
          alt={flight?.name}
          className="w-[20rem] h-[20rem] rounded m-0 p-0 transition duration-300 ease-in-out transform group-hover:opacity-50"
        />
      </Link>

      <p className="absolute top-[85%] left-[2rem] right-0 bottom-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        {flight?.name}
      </p>
    </div>
  );
};

export default MovieCard;