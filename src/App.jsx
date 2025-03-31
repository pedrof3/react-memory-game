import { useEffect, useState } from "react";
import Board from "./Board";
import imageGitHub from "./assets/github.png";
import imageJavascript from "./assets/javascript.png";
import imageLinux from "./assets/linux.png";
import imageNodejs from "./assets/nodejs.png";
import imageReact from "./assets/react.png";
import imageTailwind from "./assets/tailwind.png";

export default function App() {
    const [cards, setCards] = useState([]);
    const [turn, setTurn] = useState(0);
    const [firstGuess, setFirstGuess] = useState(null);
    const [firstGuessId, setFirstGuessId] = useState(null);
    const [win, setWin] = useState(false);

    useEffect(() => {
        const cardsList = [
            {
                id: 1,
                title: "github",
                image: imageGitHub,
                clicked: false,
                foundPair: false,
            },
            {
                id: 2,
                title: "github",
                image: imageGitHub,
                clicked: false,
                foundPair: false,
            },
            {
                id: 3,
                title: "javascript",
                image: imageJavascript,
                clicked: false,
                foundPair: false,
            },
            {
                id: 4,
                title: "javascript",
                image: imageJavascript,
                clicked: false,
                foundPair: false,
            },
            {
                id: 5,
                title: "linux",
                image: imageLinux,
                clicked: false,
                foundPair: false,
            },

            {
                id: 6,
                title: "linux",
                image: imageLinux,
                clicked: false,
                foundPair: false,
            },
            {
                id: 7,
                title: "nodejs",
                image: imageNodejs,
                clicked: false,
                foundPair: false,
            },
            {
                id: 8,
                title: "nodejs",
                image: imageNodejs,
                clicked: false,
                foundPair: false,
            },
            {
                id: 9,
                title: "react",
                image: imageReact,
                clicked: false,
                foundPair: false,
            },
            {
                id: 10,
                title: "react",
                image: imageReact,
                clicked: false,
                foundPair: false,
            },
            {
                id: 11,
                title: "tailwind",
                image: imageTailwind,
                clicked: false,
                foundPair: false,
            },
            {
                id: 12,
                title: "tailwind",
                image: imageTailwind,
                clicked: false,
                foundPair: false,
            },
        ];
        function shuffleCards(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i - 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        setCards(shuffleCards(cardsList));
    }, []);

    function guessCards(name, id) {
        if (turn === 0) {
            setFirstGuess(name);
            setFirstGuessId(id);
            setTurn(1);
        } else {
            const SecondGuess = name;
            const secondGuessId = id;

            if (firstGuessId === secondGuessId) {
                return;
            }

            setTimeout(() => {
                const resetTurn = () => {
                    const newCards = cards.map((card) => {
                        if (card.foundPair === true) {
                            return { ...card, clicked: true };
                        }
                        return { ...card, clicked: false };
                    });
                    setCards(newCards);
                };
                resetTurn();
            }, 1500);

            setTurn(0);
            verifyGuess(firstGuess, firstGuessId, SecondGuess, secondGuessId);
        }
        verifyWin();
    }

    function verifyGuess(first, firstId, second, secondId) {
        if (first === second && first !== null) {
            if (firstId !== secondId) {
                onFoundPair(first);
            }
        }
    }

    function verifyWin() {
        const result = cards.every((card) => card.foundPair === true);
        setWin(result);
    }

    function onFoundPair(first) {
        const newCards = cards.map((card) => {
            if (card.title === first) {
                card.foundPair = true;
            }
        });
        setCards(newCards);
    }

    function turnCard(id) {
        const newCards = cards.map((card) => {
            if (card.id === id) {
                return { ...card, clicked: true };
            }
            return card;
        });
        setCards(newCards);
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="text-5xl font-bold text-black">Jogo da memória</h1>
            <Board
                cards={cards}
                guessCards={guessCards}
                turnCard={turnCard}
                win={win}
            />
        </div>
    );
}
