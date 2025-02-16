import { atom } from 'jotai';
import { Fruit } from '@/types/fruit';

export const yourSelectedFruitsAtom = atom<Fruit[]>([]);
export const theirSelectedFruitsAtom = atom<Fruit[]>([]);

export const yourTotalValueAtom = atom((get) => {
    const selectedFruits = get(yourSelectedFruitsAtom);
    return selectedFruits.reduce((total, fruit) => total + fruit.value, 0);
});

export const theirTotalValueAtom = atom((get) => {
    const selectedFruits = get(theirSelectedFruitsAtom);
    return selectedFruits.reduce((total, fruit) => total + fruit.value, 0);
});

export const valueDifferenceAtom = atom((get) => {
    const yourTotal = get(yourTotalValueAtom);
    const theirTotal = get(theirTotalValueAtom);
    return yourTotal - theirTotal;
});