import { sprintf } from "printj"
import "colors"
export function cost(times: string, target: string, operation: string,
    f: (...args: any[]) => void, ...args: any[]) {
    const start = new Date().getTime()
    f(...args)
    const used = new Date().getTime() - start;
    const str = sprintf("%-10s\t%-10s\t%-25s\t%dms", times, target, operation, used)
    console.log(str)
}

export function generateRandomArray(size: number = 100_000) {
    const result: number[] = []
    for (let i = 0; i < size; i++) {
        result.push(Math.random() * size)
    }
    return result;
}