const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-32">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center w-full rounded-xl h-full bg-[#004D43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochi logo"
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            &copy; 2019-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card rounded-xl w-full h-full bg-[#1e2d2c]"></div>
        <div className="card rounded-xl w-full h-full bg-[#1e2d2c]"></div>
      </div>
    </div>
  );
};

export default Cards;
