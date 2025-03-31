export default function Board(props) {
    if (props.win) {
        return (
            <div>
                <h1>Fim de jogo</h1>
                <p>Você encontrou todos os pares</p>
            </div>
        );
    }
    return (
        <div className="w-[70%] h-[80%] grid grid-cols-6 grid-rows-2 gap-4 p-8 rounded-xl bg-sky-600">
            {props.cards.map((card) => (
                <div
                    key={card.id}
                    className={`rounded-xl ${
                        card.clicked === true
                            ? `gap-4 p-4 bg-gray-300`
                            : `bg-black`
                    }`}
                    // className="flex flex-col justify-center text-center gap-4 p-4 rounded-xl bg-gray-300"
                    onClick={() => {
                        props.guessCards(card.title, card.id);
                        props.turnCard(card.id);
                    }}
                >
                    <div
                        className={`w-[100%] h-[100%] ${
                            card.clicked === true
                                ? `visible flex flex-col justify-center text-center`
                                : `hidden`
                        }`}
                    >
                        <img src={card.image} alt="image" />
                        <p>{card.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
