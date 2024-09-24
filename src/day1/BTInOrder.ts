function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // pre
    walk(curr.left, path);

    // recurse
    path.push(curr.value);

    // post
    walk(curr.right, path);
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
