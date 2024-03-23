import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../index.css";

const CardContainer = () => {
  const cardsData = [
    { index: 16, value: "H", visibal: false },
    { index: 2, value: "B", visibal: false },
    { index: 3, value: "C", visibal: false },
    { index: 4, value: "D", visibal: false },
    { index: 5, value: "E", visibal: false },
    { index: 6, value: "F", visibal: false },
    { index: 7, value: "G", visibal: false },
    { index: 8, value: "H", visibal: false },
    { index: 9, value: "A", visibal: false },
    { index: 10, value: "B", visibal: false },
    { index: 11, value: "C", visibal: false },
    { index: 12, value: "D", visibal: false },
    { index: 13, value: "E", visibal: false },
    { index: 14, value: "F", visibal: false },
    { index: 15, value: "G", visibal: false },
    { index: 1, value: "A", visibal: false },
  ];
  const shuffle = (array) => {
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  };
  // let SuffleArray = shuffle(cardsData);
  const [cards, setCards] = useState(shuffle(cardsData));
  const [flippedCards, setFlippedCards] = useState([]);
  const [click, setClick] = useState(0);
  const [prevId, setprevId] = useState();

  const handalClick = (id) => {
    // console.log("Done", id);
    const clickedCard = cards.find((card) => card.index === id);
    setprevId(id);
    if (clickedCard.visibal || prevId === id) {
      console.log("Clicked Before");
      return;
    }
    if (flippedCards.length <= 1) {
      setFlippedCards([...flippedCards, clickedCard]);
      CheckMove();
      setClick(click + 1);
      // console.log(click + 1);
      // console.log(cards[id - 1]);
    }
  };
  const CheckMove = () => {
    if (click === 2) {
      console.log("2 time");

      if (flippedCards[0]?.value === flippedCards[1]?.value) {
        let id1, id2;
        id1 = flippedCards[0]?.index;
        id2 = flippedCards[1]?.index;
        console.log("id1", id1, "id2", id2);
        setCards(
          cards.map((ite) => {
            if (ite.index === id1 || ite.index === id2) {
              return { ...ite, visibal: true };
            } else {
              return ite;
            }
          })
        );
        setFlippedCards([]);
        setClick(0);
      } else {
        const timeout = setTimeout(() => {
          // setIsVisible(true);
          setFlippedCards([]);
          setClick(0);
          setprevId("");
        }, 1100);

        return () => clearTimeout(timeout);
      }
    }
  };

  const chekSuccess = () => {
    return cards?.every((card) => card.visibal);
  };

  const ResetButton = () => {
    // console.log("aa");
    setCards(shuffle(cardsData));
    setprevId("");
    setClick();
    setFlippedCards([]);
  };

  // useEffect(() => {
  //   // let newarr = shuffle(cardsData);
  //   // console.log(newarr);
  //   // setCards(newarr);
  // }, []);
  useEffect(() => {
    if (click === 2) {
      CheckMove();
    }
    // CheckMove();
  }, [click]);

  return (
    <div className="p-2 text-white ">
      <h2 className="text-center font-semibold py-2">Card Flip Game</h2>

      {chekSuccess() ? (
        <div className="flex  justify-center items-center m-5">
          <h1 className="text-center font-bold lg:text-7xl text-5xl ">
            ! Winner !
          </h1>
          <button
            className="bg-slate-500 lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] my-5 rounded "
            onClick={ResetButton}
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="flex gap-2 lg:flex-row flex-col justify-center items-center">
          <div className="rounded border-inherit border-2 flex lg:w-[42%] w-[90%] flex-wrap justify-center justify-items-stretch ">
            {cards?.map((item, ind) => (
              // console.log(item.value);
              <Card
                key={ind}
                name={item.value}
                click={handalClick}
                id={item.index}
                flippedCards={flippedCards}
                visibal={item.visibal}
              />
            ))}
          </div>
          <button
            className="bg-slate-500  rounded lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            onClick={ResetButton}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default CardContainer;