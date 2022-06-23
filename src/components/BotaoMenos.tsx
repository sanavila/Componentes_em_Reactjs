type Props = {
    clickFnm: (num: number) => void;
}
export const BotaoMenos = ({clickFnm}: Props) => {
    const clickMinus = () => {
        clickFnm(+1)
    }
    return (
        <div>
            <button onClick={clickMinus}>-</button>
        </div>
    );
}