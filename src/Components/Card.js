import { useEffect, useState } from "react";

const Card = ({ name, click, id, flippedCards, visibal }) => {
  const [see, setsee] = useState(false);
  let idp = id;

  const CheckCanSee = () => {
    if (flippedCards[0]?.index === idp) {
      return setsee(true);
    } else if (flippedCards[1]?.index === idp) {
      return setsee(true);
    } else {
      return setsee(false);
    }
  };
  useEffect(() => {
    CheckCanSee();
  }, [click]);

  return (
    <>
      <button
        className={`lg:w-[180px] lg:h-[180px] w-[72px] h-[72px] p-2 bg-slate-500 m-2 rounded flex justify-center items-center  ${id} ${
          visibal === true ? "bg-green-900" : ""
        }`}
        disabled={visibal === true ? true : false}
        onClick={() => {
          click(id);
          console.log(id, name);
        }}
      >
        {see || visibal ? name : ""}
      </button>
    </>
  );
};

export default Card;
