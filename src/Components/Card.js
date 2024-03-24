import { useEffect, useState } from "react";

const Card = ({ name, click, id, flippedCards, visibal, photo }) => {
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
        className={`lg:w-[180px] lg:h-[180px] w-[72px] h-[72px] p-2  m-2 rounded flex justify-center items-center   ${
          visibal == true ? "bg-green-900" : "bg-slate-500"
        }`}
        disabled={visibal === true ? true : false}
        onClick={() => {
          click(id);
          console.log(id, name);
        }}
      >
        {see || visibal ? <img alt={name} loading="lazy" src={photo} /> : ""}
      </button>
    </>
  );
};

export default Card;
