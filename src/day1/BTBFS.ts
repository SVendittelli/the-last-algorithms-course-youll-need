export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    while (q.length) {
        const next = q.shift();
        if (next?.value === needle) return true;
        if (next?.left) q.push(next.left);
        if (next?.right) q.push(next.right);
    }

    return false;
}
