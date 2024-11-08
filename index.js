const ReactX = (() => {
    let state = [];

    let index = 0;
    const useState = (initialValue) => {
        const localIndex = index;
        index++;

        if(state[localIndex] === undefined)
            state[localIndex] = initialValue

        const setterFunction = (newValue) => {
            state[localIndex] = newValue;
        }

        return [state[localIndex], setterFunction];
    };

    const resetIndex = () =>
    {
        index = 0;
    }

    return {
        useState, resetIndex,
    };
})();

const { useState, resetIndex } = ReactX;

const Component = () => {
    const [counterValue, setCounterValue] = useState(1);

    console.log(counterValue)

    if (counterValue !== 2) {
        setCounterValue(2);

    }
};

Component();
resetIndex();
Component();

