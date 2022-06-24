export const BotaoMenos = () => {
    const clickMinus = () => {
        const detail = { num: 2 };
        const event = new CustomEvent('minus', { detail });
        document.dispatchEvent(event);
    }
    return (
        <div>
            <button onClick={clickMinus}>-</button>
        </div>
    );
}