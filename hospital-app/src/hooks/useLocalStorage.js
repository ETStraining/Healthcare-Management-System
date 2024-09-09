import {useEffect, useState} from "react";

const useLocalStorage = (key, initValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const localStorageValue = localStorage.getItem(key);
        return localStorageValue !== null ? JSON.parse(localStorageValue) : initValue

    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;