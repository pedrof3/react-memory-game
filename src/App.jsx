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

    useEffect(() => {
        const cardsList = [
            {
                id: 1,
                title: "github",
                image: imageGitHub,
            },
            {
                id: 2,
                title: "github",
                image: imageGitHub,
            },
            {
                id: 3,
                title: "javascript",
                image: imageJavascript,
            },
            {
                id: 4,
                title: "javascript",
                image: imageJavascript,
            },
            {
                id: 5,
                title: "linux",
                image: imageLinux,
            },

            {
                id: 6,
                title: "linux",
                image: imageLinux,
            },
            {
                id: 7,
                title: "nodejs",
                image: imageNodejs,
            },
            {
                id: 8,
                title: "nodejs",
                image: imageNodejs,
            },
            {
                id: 9,
                title: "react",
                image: imageReact,
            },
            {
                id: 10,
                title: "react",
                image: imageReact,
            },
            {
                id: 11,
                title: "tailwind",
                image: imageTailwind,
            },
            {
                id: 12,
                title: "tailwind",
                image: imageTailwind,
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

    console.log(cards);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="text-5xl font-bold text-black">Jogo da memória</h1>
            <Board cards={cards} />
        </div>
    );
}
