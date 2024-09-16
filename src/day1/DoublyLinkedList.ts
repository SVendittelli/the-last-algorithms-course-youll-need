export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const node = new Node(item);
        node.next = this.head;
        this.head = node;
        ++this.length;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx >= this.length) return;
        if (idx === 0) return this.prepend(item);
        if (idx === this.length - 1) return this.append(item);

        const node = new Node(item);
        let current = this.head;
        for (let i = 0; i < idx - 1; ++i) {
            current = current?.next;
        }
        if (!current) return;
        node.next = current.next;
        node.prev = current;
        current.next = node;
        current.next.prev = node;
        ++this.length;
    }

    append(item: T): void {
        const node = new Node(item);
        node.prev = this.tail;
        this.tail = node;
        ++this.length;
    }

    get(index: number): T | undefined {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current?.next;
        }
        return current?.value;
    }

    remove(item: T): T | undefined {
        // If the head is the first item then remove it
        if (this.head?.value === item) {
            const returnValue = this.head?.value;
            this.head = this.head?.next;
            if (this.head) this.head.prev = undefined;
            this.length = Math.max(0, this.length - 1);
            return returnValue;
        }

        let current = this.head;
        while (current?.next) {
            if (current?.next?.value === item) {
                const returnValue = current.next.value;
                current.next = current.next?.next;
                if (current.next) current.next.prev = current;
                --this.length;
                return returnValue;
            }
            current = current?.next;
        }
        return undefined;
    }

    removeAt(index: number): T | undefined {
        if (index < 0 || index >= this.length) return undefined;

        // If the index is 0, remove the head
        if (index === 0) {
            const returnValue = this.head?.value;
            this.head = this.head?.next;
            if (this.head) this.head.prev = undefined;
            this.length = Math.max(0, this.length - 1);
            return returnValue;
        }

        // Otherwise, go to the node before the one we want to remove
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current?.next;
        }
        const returnValue = current?.next?.value;
        if (!current) {
            return undefined;
        }
        current.next = current?.next?.next;
        if (current.next) current.next.prev = current;
        --this.length;
        return returnValue;
    }
}

class Node<T> {
    public value: T;
    public next?: Node<T>;
    public prev?: Node<T>;

    constructor(value: T) {
        this.value = value;
    }
}
