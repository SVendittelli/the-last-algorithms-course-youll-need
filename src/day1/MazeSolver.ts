const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Bace cases:
    // 1. Off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // 2. Its a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. Its the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // 4. If we have seen the node before
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Steps to recursion:
    // 1. pre
    path.push(curr);
    seen[curr.y][curr.x] = true;

    // 2. recurse
    for (let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true;
        }
    }

    // 3. post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
