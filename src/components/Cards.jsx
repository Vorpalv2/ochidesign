const Cards = () => {
  return (
    <div className="w-full h-screen bg-[#fff] rounded-lg flex gap-5 items-center px-20">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center w-full rounded-xl h-full bg-[#004D43]">
          <img
            className=" scale-150"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochi logo"
          />
          <button className="absolute border-[#CDEA68] text-[#CDEA68] text-2xl left-10 bottom-10 px-5 py-1 rounded-full border-2">
            &copy; 2019-2024
          </button>
        </div>
      </div>
      <div className="relative cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card flex items-center justify-center rounded-xl w-full h-full bg-[#212121]">
          <img
            className=" scale-125"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="clutch logo"
          />
          <button className="absolute border-gray-400 uppercase text-[#fff] text-xl left-10 bottom-10 px-5 py-1 rounded-full border-2">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="relative card flex items-center justify-center rounded-xl w-full h-full bg-[#212121]">
          <img
            className=" scale-50"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="business bootcamp alumni"
          />
          <button className="absolute border-gray-400 text-[#fff] text-xl left-10 bottom-10 px-5 py-1 rounded-full border-2 uppercase">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
