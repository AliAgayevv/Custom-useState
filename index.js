const ReactX = (() => {
    	// eger state i useState ichinde init elesek, her defe cagrilanda 1 den baslayacaq bunun qarshisin almaq ucun evvelnce state adli variable yaradiriq sonra ise deyer veririk
    let state = [];

    let index = 0;
    const useState = (initialValue) => {
          // state undefined yeni hele icine deyer qoyulmayibsa initialValue argumentini icine atiriq
        const localIndex = index;
        index++;

        if(state[localIndex] === undefined)
            state[localIndex] = initialValue
            // state i artiracaq funksiya    
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
    	// ReactX icinde fake state yaratmisdiq, onu basladiriq.
    const [counterValue, setCounterValue] = useState(1);

    console.log(counterValue)
// deyer 2 deilse 2 ye teyin edirik, infinite loop qarshisin almaq uchundur
    if (counterValue !== 2) {
        setCounterValue(2);

    }
};

Component();
resetIndex();
Component();

