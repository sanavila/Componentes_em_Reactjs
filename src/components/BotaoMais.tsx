export const BotaoMais = () => {
    const clickPlus = () => {
        const detail = { num: 3 };
        const event = new CustomEvent('plus', { detail });
        document.dispatchEvent(event);
    }
    return (
        <div>
            <button onClick={clickPlus}>+</button>
        </div>
    );
}