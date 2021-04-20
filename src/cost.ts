import { sprintf } from "printj/types"
import { HashMap, ESHashMap, hash } from "tdscore"
import { quickSort, shellSort } from "tdscore/lib/algorithm"
import { cost, generateRandomArray } from "./util"


export default function () {
    const str = sprintf("%-10s\t%-10s\t%-25s\t%s", "Times", "Target", "Operation", "Used time").bgCyan.black
    console.log(str)
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



    cost("1", "shell sort", "100k size array", () => {
        shellSort(generateRandomArray(), (a, b) => a - b)
    })

    cost("1", "quick sort", "10k size array", () => {
        quickSort(generateRandomArray(10000), (a, b) => a - b)
    })
}