/**
 * Partition the array
 * @param {numberr[]} arr - The array to partition
 * @param {number} lo - The lower array index
 * @param {number} hi - The upper array index
 * @returns {number} The final index of the pivot
 */
function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            ++idx;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

/**
 * Sort the partition
 * @param {numberr[]} arr - The array to sort
 * @param {number} lo - The lower array index
 * @param {number} hi - The upper array index
 */
function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
