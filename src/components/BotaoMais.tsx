type Props = {
    clickFn: (num: number) => void;
}
export const BotaoMais = ({clickFn}: Props) => {
    const clickMore = () => {
        clickFn(+1)
    }
    return (
        <div>
            <button onClick={clickMore}>+</button>
        </div>
    );
}