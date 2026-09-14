import { fizzbuzzmulti as peerFizz } from "peer-filter-c00299368";
import { odd_numbers as myOdd } from "$lib/filters/remove_odd_numbers";

export function combinedFilter(xs: number[]): string[] {
    const afterMine = myOdd(xs);
    return peerFizz(afterMine);
}