export default function numberFormat(x){
    return (new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3, style: 'currency', currency: 'INR' }).format(x));
}