export default function Board(props) {
    return (
        <div className="w-[70%] h-[80%] grid grid-cols-6 gap-4 p-8 rounded-xl bg-sky-600">
            {props.cards.map((card) => (
                <div
                    key={card.id}
                    className="flex flex-col justify-center text-center gap-4 p-4 rounded-xl bg-gray-300"
                >
                    <img src={card.image} alt="image" />
                    <p>{card.title}</p>
                </div>
            ))}
        </div>
    );
}
