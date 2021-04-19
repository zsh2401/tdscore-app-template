import { HashMap, ESMap, ESHashMap, hash } from "tdscore"
import { sprintf } from "printj"
import "colors"
import { quickSort } from "tdscore/lib/algorithm"


const str = sprintf("%-10s\t%-10s\t%-25s\t%s", "Times", "Target", "Operation", "Used time").bgCyan.black
console.log(str)

function cost(times: string, target: string, operation: string, f: () => void) {
    const start = new Date().getTime()
    f()
    const used = new Date().getTime() - start;
    const str = sprintf("%-10s\t%-10s\t%-25s\t%dms", times, target, operation, used)
    console.log(str)
}

cost("100,000", "HashMap", "put & get", () => {
    const map = new HashMap()

    for (let i = 0; i < 100_000; i++) {
        map.mapPut(i, i)
        map.mapGet(i)
    }
})

cost("100,000", "ESHashMap", "put & get", () => {
    const map = new ESHashMap()

    for (let i = 0; i < 100_000; i++) {
        map.mapPut(i, i)
        map.mapGet(i)
    }
})

cost("100,000", "Native ESMap", "put & get", () => {
    const map = new Map()

    for (let i = 0; i < 100_000; i++) {
        map.set(i, i)
        map.get(i)
    }
})

cost("1,000,000", "hash", "for random double number", () => {
    for (let i = 0; i < 1_000_000; i++) {
        hash(Math.random() * 1000 * 0.501)
    }
})

const bigArray: number[] = []
for (let i = 0; i < 1_000; i++) {
    bigArray.push(Math.random() * 1_000)
}
cost("N/A", "quick sort", "1k size array", () => {
    quickSort(bigArray, (a, b) => a - b)
})