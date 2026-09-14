import { describe, it, expect } from 'vitest';
import { odd_numbers } from './remove_odd_numbers';

describe('Odd numbers filter', () => {
    it('Removes odd numbers 1', () => {
        const input = [1, 7, 2, 8, 3, 9, 4, 10, 5, 11, 6];
        const expected = [2, 8, 4, 10, 6];
        expect(odd_numbers(input)).toEqual(expected);
    });
    it('Removes odd numbers 2', () => {
        const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expected = [2, 4, 6, 8, 10];
        expect(odd_numbers(input)).toEqual(expected);
    });
    it('Removes odd numbers 3', () => {
        const input = [2, 5, 8, 21, 43, 64];
        const expected = [2, 8, 64];
        expect(odd_numbers(input)).toEqual(expected);
    });
});