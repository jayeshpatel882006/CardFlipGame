import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../index.css";
import { motion } from "framer-motion";

const CardContainer = () => {
  const cardsData = [
    {
      index: 16,
      value: "H",
      visibal: false,
      photo:
        "https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png",
    },
    {
      index: 2,
      value: "B",
      visibal: false,
      photo:
        "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
    },
    {
      index: 3,
      value: "C",
      visibal: false,
      photo:
        "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
    },
    {
      index: 4,
      value: "D",
      visibal: false,
      photo:
        "https://seeklogo.com/images/K/kotlin-logo-30C1970B05-seeklogo.com.png",
    },
    {
      index: 5,
      value: "E",
      visibal: false,
      photo:
        "https://seeklogo.com/images/P/php-logo-DC4A01DBB6-seeklogo.com.png",
    },
    {
      index: 6,
      value: "F",
      visibal: false,
      photo:
        "https://seeklogo.com/images/S/swift-logo-7927855EB5-seeklogo.com.png",
    },
    {
      index: 7,
      value: "G",
      visibal: false,
      photo:
        "https://seeklogo.com/images/G/go-language-logo-1EEF01C7CF-seeklogo.com.png",
    },
    {
      index: 8,
      value: "H",
      visibal: false,
      photo:
        "https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png",
    },
    {
      index: 9,
      value: "A",
      visibal: false,
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    },
    {
      index: 10,
      value: "B",
      visibal: false,
      photo:
        "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
    },
    {
      index: 11,
      value: "C",
      visibal: false,
      photo:
        "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
    },
    {
      index: 12,
      value: "D",
      visibal: false,
      photo:
        "https://seeklogo.com/images/K/kotlin-logo-30C1970B05-seeklogo.com.png",
    },
    {
      index: 13,
      value: "E",
      visibal: false,
      photo:
        "https://seeklogo.com/images/P/php-logo-DC4A01DBB6-seeklogo.com.png",
    },
    {
      index: 14,
      value: "F",
      visibal: false,
      photo:
        "https://seeklogo.com/images/S/swift-logo-7927855EB5-seeklogo.com.png",
    },
    {
      index: 15,
      value: "G",
      visibal: false,
      photo:
        "https://seeklogo.com/images/G/go-language-logo-1EEF01C7CF-seeklogo.com.png",
    },
    {
      index: 1,
      value: "A",
      visibal: false,
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    },
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
        }, 800);

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
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col  justify-center items-center m-5"
        >
          <h1 className="text-center text-green-700 font-bold lg:text-7xl text-5xl ">
            ! Winner !
          </h1>
          <button
            className="bg-slate-500 lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] my-5 rounded "
            onClick={ResetButton}
          >
            Reset
          </button>
        </motion.div>
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
                photo={item.photo}
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
