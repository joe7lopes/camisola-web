import {combineReducers} from 'redux';
import badges from './badges/reducer';
import {Category} from "../../../../types";

let INITIAL_SIZES_STATE = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL',
    '1-2 anos',
    '3-4 anos',
    '5-6 anos',
    '7-8 anos',
    '9-10 anos',
    '11-12 anos',
    '13-14 anos',
];

const INITIAL_CATEGORIES_STATE = [
    {name: Category.PORTUGAL, displayName: 'Portugal'},
    {name: Category.BENFICA, displayName: 'Benfica'},
    {name: Category.PORTO, displayName: 'Porto'},
    {name: Category.SPORTING, displayName: 'Sporting'},
    {name: Category.CRIANCAS, displayName: 'Crianças'},
    {name: Category.OUTROS, displayName: 'Outros'},
    {name: Category.PROMOCOES, displayName: 'Promoções'},
    {name: Category.CAMISOLAS, displayName: 'Camisolas'},
    {name: Category.FATOS_DE_TREINO, displayName: 'Fatos de treino'},
    {name: Category.EQUIPAMENTOS_CRIANCA, displayName: 'Equipamentos de Criança'},
];

const sizes = (state = INITIAL_SIZES_STATE, action: any) => {
    return state
};

const categories = (state = INITIAL_CATEGORIES_STATE, action: any) => {
    return state
};

const prices = (state = {stampingExtraCost: 12, productDefaultPrice: 30, shippingCost: 5}, action:any) => {
    return state
}

const reducer = combineReducers({
    badges,
    sizes,
    categories,
    prices
});


export default reducer;
