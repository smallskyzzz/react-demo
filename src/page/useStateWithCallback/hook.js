import {useRef, useState, useEffect} from 'react';

function useCallbackState(initState) {
    const cbRef = useRef();
    const [state, setState] = useState(initState);

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        cbRef.current?.(state);
    }, [state]);

    return [
        state,
        function setAndCallback(state, callback) {
            cbRef.current = callback;
            setState(state);
        }
    ]
}

export default useCallbackState