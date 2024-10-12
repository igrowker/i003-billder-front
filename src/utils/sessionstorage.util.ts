


export const setItemToSessionStorage = <T>(key: string, body: T ): void => {
    sessionStorage.setItem(key, JSON.stringify(body));
};


export const getItemFromSessionStorage = <T>(key: string): T | null => {
    const itemFound = sessionStorage.getItem(key);
    
    if ( itemFound === null ) return null;

    return JSON.parse(itemFound);
};

export const removeItemFromSessionStorage = (key: string): void => {

    sessionStorage.removeItem(key);
};