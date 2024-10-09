


export const setItemToLocalStorage = <T>(key: string, body: T ): void => {
    localStorage.setItem(key, JSON.stringify(body));
};


export const getItemFromLocalStorage = <T>(key: string): T | null => {
    const itemFound = localStorage.getItem(key);
    
    if ( itemFound === null ) return null;

    return JSON.parse(itemFound);
};

export const removeItemFromLocalStorage = (key: string): void => {

    localStorage.removeItem(key);
};