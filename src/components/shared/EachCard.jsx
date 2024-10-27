const EachCard = ({ Icon, Number, Name }) => {
  return (
    <div className="flex items-center gap-2 bg-white p-1 md:p-3 rounded-xl">
      <div className="text-white bg-pink-800 w-min p-2 md:p-4 rounded-lg text-2xl md:text-3xl">
        {Icon}
      </div>
      <div>
        <h5 className="md:text-2xl">{Number}</h5>
        <h6 className="font-light text-xs md:text-sm lx:text-base">{Name}</h6>
      </div>
    </div>
  );
};

export default EachCard;
