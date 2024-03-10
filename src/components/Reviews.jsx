const data = [
  {
    name1: "Kamran Ventures",
    name2: "William Barnes",
  },
  {
    name1: "Planetly",
    name2: "Nina Walloch",
  },
  {
    name1: "Workiz Easy",
    name2: "Tomer Levy",
  },
  {
    name1: "Premium Blend",
    name2: "Ellen Kim",
  },
  {
    name1: "Hypercare Systems",
    name2: "Brendan Goss",
  },
  {
    name1: "Officevibe",
    name2: "Raff Labrie",
  },
  {
    name1: "Orderlion",
    name2: "Stefan Strohmer",
  },
  {
    name1: "Black Book",
    name2: "Jaci Smith",
  },
  {
    name1: "Trawa Energy",
    name2: "David Budde",
  },
];

const SingleReview = ({ first, second }) => {
  return (
    <div className="w-full relative flex items-center justify-between pl-20 h-[20px] border-b-2 p-8">
      <h4 className="text-2xl underline">{first}</h4>
      <div className="w-[200px] absolute left-1/2">
        <h4 className="text-2xl">{second}</h4>
      </div>
      <a href="/">
        <h4 className="text-2xl uppercase underline pr-10">{"Read"}</h4>
      </a>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <h1 className=" text-8xl tracking-tight ml-20 mb-14">
          Clients’ reviews
        </h1>
        {/* <div className=" border-b-[1px] pt-20"></div> */}
      </div>
      <div className="border-b-2"></div>
      {data.map((element, index) => {
        return (
          <SingleReview
            key={index}
            first={element.name1}
            second={element.name2}
          />
        );
      })}
    </div>
  );
};

export default Reviews;
