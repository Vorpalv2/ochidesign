const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter">
              {"FYDE".split("").map((element, index) => (
                <span key={index}>{element}</span>
              ))}
            </h1>
            <div className="card w-full rounded-lg overflow-hidden h-full">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter">
              {"VISE".split("").map((element, index) => (
                <span key={index}>{element}</span>
              ))}
            </h1>
            <div className="card w-full rounded-lg h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
