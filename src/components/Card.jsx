const Card = (props) => {
  return (
    <div>
      <div
        className={`shadow-lg rounded-2xl p-6 w-56 min-h-60 mx-auto mt-10 flex flex-col items-center flex-shrink-0 ${
          props.bg === "light" ? "bg-gray-dark" : "bg-background"
        }`}
      >
        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-blue hover:underline overflow-hidden text-ellipsis line-clamp-2 mb-2">
          {props.title}
        </h2>

        {/* Description */}
        <p className="text-white text-sm overflow-hidden text-ellipsis line-clamp-6">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
