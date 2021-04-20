import { sprintf } from "printj"
import { HashMap, ESHashMap, hash, DSArray, LinkedList, DSObject } from "tdscore"
import { quickSort, shellSort } from "tdscore/lib/algorithm"
import { cost, generateRandomArray } from "./util"


export default function () {
    const str = sprintf("%-10s\t%-10s\t%-25s\t%s", "N/times", "Target", "Operation", "Used time").bgCyan.black
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

    cost("1,000,000", "DSArray", "random read&write", (a: DSArray<number>) => {
        for (let i = 0; i < 1_000_000; i++) {
            Math.random() > 0.5 ? a[i] : a[i] = 0
        }
    }, (() => {
        const jsArray = generateRandomArray(1000000)
        return new DSArray(1000000, (i) => jsArray[i])
    })())

    cost("1,000,000", "DSObject&LinkedList", "create dsobject and save it", () => {
        const l = new LinkedList<DSObject>()
        for (let i = 0; i < 1_000_000; i++) {
            l.listAdd(new DSObject())
        }
    })

    cost("100,000", "shell sort", "", (arr: number[]) => {
        shellSort(arr, (a, b) => a - b)
    }, generateRandomArray(100_000))

    cost("1,000", "quick sort", "", (arr: number[]) => {
        quickSort(arr, (a, b) => a - b)
    }, generateRandomArray(1000))

}