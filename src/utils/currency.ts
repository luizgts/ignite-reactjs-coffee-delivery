import currency from 'currency.js';

export function formatCurrency(value: number | string){
    return currency(value, { 
        separator: '.', 
        decimal: ',', 
        fromCents: true,
        symbol: ''
    });
}