import { describe, it, expect } from "vitest";
import { combinedFilter } from "./combined";

describe('combined (mine->peer)', () => {
    it('basic sequence', () => {
        const input = [1, 3, 7, 9, 4];
        const expected = ["4"];
        expect(combinedFilter(input)).toEqual(expected);
    });

    it('Edge case', () => {
       const input = [30, 69, 412, 423421, 4235];
       const expected = ["FizzBuzz", "412"];
       expect(combinedFilter(input)).toEqual(expected); 
    });
});