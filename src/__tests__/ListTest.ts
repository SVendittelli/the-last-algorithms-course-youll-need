export function test_list(list: List<number>): void {
    const array = [5, 7, 9];

    // Test append and length
    for (let item of array) {
        list.append(item);
    }
    expect(list.length).toEqual(array.length); // [5,7,9]

    // Test get
    array.forEach((item, index) => {
        expect(list.get(index)).toEqual(item);
    });

    // Test removeAt
    expect(list.removeAt(1)).toEqual(array[1]); // [5,9]
    expect(list.length).toEqual(2); // [5,9]

    list.append(11); // [5,9,11]
    expect(list.removeAt(1)).toEqual(9); // [5,11]

    // Test remove non-existing
    expect(list.remove(9)).toEqual(undefined); // [5,11]
    expect(list.removeAt(0)).toEqual(5); // [11]
    expect(list.removeAt(0)).toEqual(11); // []
    expect(list.length).toEqual(0); // []

    // Test prepend
    for (let item of array) {
        list.prepend(item);
    }
    expect(list.length).toEqual(array.length); // [9,7,5]

    array
        .slice()
        .reverse()
        .forEach((item, index) => {
            expect(list.get(index)).toEqual(item);
        });

    // Test remove existing
    expect(list.remove(9)).toEqual(9); // [7,5]
    expect(list.length).toEqual(2); // [7,5]
    expect(list.get(0)).toEqual(7); // [7,5]

    list.prepend(1); // [1,7,5]
    list.insertAt(3, 1); // [1,3,7,5]
    expect(list.get(1)).toEqual(3);
    expect(list.length).toEqual(4);
}
