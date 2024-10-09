
export const isTokenExpired = (expirationDate: Date) => {

    const tokenExpirationDate = new Date(expirationDate);

    const today = new Date();

    
    return today > tokenExpirationDate

}



export const shouldRenewToken = (expirationTime: Date): boolean => {
    // Define el tiempo de verificación (5 minutos) en milisegundos
    const timeToCheck = 30 * 60 * 1000; // 5 minutos en milisegundos

    // Calcula la diferencia entre el tiempo de expiración y el tiempo actual
    const now = new Date().getTime();
    const expiration = new Date(expirationTime).getTime();
    const difference = expiration - now;
    // Si la diferencia es menor a 5 minutos, devuelve true
    return difference < timeToCheck;
}


