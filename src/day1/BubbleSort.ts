export default function bubble_sort(arr: number[]): void {
    // Bubble sort only guarentees the last item will be sorted each iteration
    // so we need one iteration for each element.
    for (let i = 0; i < arr.length; i++) {
        // Iterate through every item in the array except the last one as we
        // swap pairwise. As the last item is always sorted, reduce the array
        // by the number of items every iteration.
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Swap the pairwise larger item to the later position every time
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
