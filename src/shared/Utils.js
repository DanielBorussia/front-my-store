export const formatCurrency = (currency) => {
    return new Intl.NumberFormat().format(currency);
};