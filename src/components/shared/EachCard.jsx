const EachCard = ({ Icon, Number, Name }) => {
  return (
    <div className="flex items-center gap-2 bg-white p-3 rounded-xl">
      <div className="text-white bg-pink-800 w-min p-4 rounded-lg text-3xl">
        {Icon}
      </div>
      <div>
        <h5 className="text-2xl">{Number}</h5>
        <h6 className="font-light">{Name}</h6>
      </div>
    </div>
  );
};

export default EachCard;
