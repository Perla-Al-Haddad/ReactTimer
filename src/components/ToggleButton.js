export default function ToggleButton({ state, setState }) {

    const labelStartValue = "Start";
    const labelStopValue = "Stop";

    function handleClick(e) {
        setState(!state);
    }

    return (
        <button className={"timer " + (state ? "on" : "off")} onClick={handleClick}>
            {state ? labelStopValue : labelStartValue}
        </button>
    );
}

