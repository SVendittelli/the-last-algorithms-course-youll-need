export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lValue = this.data[lIdx];
        const rValue = this.data[rIdx];
        const value = this.data[idx];

        if (lValue > rValue && value > rValue) {
            this.data[idx] = rValue;
            this.data[rIdx] = value;
            this.heapifyDown(rIdx);
        } else if (rValue > lValue && value > lValue) {
            this.data[idx] = lValue;
            this.data[lIdx] = value;
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx);
        const parentValue = this.data[p];
        const v = this.data[idx];

        if (parentValue > v) {
            this.data[idx] = parentValue;
            this.data[p] = v;
            this.heapifyUp(p);
        }
    }

    /**
     * For a given index, return the index of its parent.
     *
     * @param {number} idx - The index of the item
     * @returns {number} The index of the parent
     */
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    /**
     * For a given index, return the index of its left child.
     *
     * @param {number} idx - The index of the item
     * @returns {number} The index of the left child
     */
    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    /**
     * For a given index, return the index of its right child.
     *
     * @param {number} idx - The index of the item
     * @returns {number} The index of the right child
     */
    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}
