
/**
 * Bu fonksiyon, 0 ve pUpperLimit-1 dahil olacak sekilde random sayi geri dondurur.
 */
function getRandomNumber(pUpperLimit){
    return Math.floor(Math.random() * pUpperLimit);
}

/**
 * Bu fonksiyon, parametre olarak gonderilen id'ye gore ilgili Html ogesini geri dondurur.
 */
function getElementById(pId){
    return document.getElementById(pId);
}