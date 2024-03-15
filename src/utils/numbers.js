export const formatNumber = (number) => {
    if (number >= 1000000) {
        return Math.round(number / 100000) / 10 + " millions";
    }
    if (number >= 1000) {
        return Math.round(number / 100) / 10 + " thousands";
    }
    if (number >= 100) {
        return Math.round(number / 100) + " hundreds";
    }
    return number.toString();
};