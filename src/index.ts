import { hash, HashSet, HashMap } from "tdscore"
import TreeMap from "tdscore/lib/data-structure/map/TreeMap"
import "colors"
// const VALUE = "Hello World!"
// console.log(`The hash code of ${VALUE} is ${hash(VALUE)}`.green);

function cost(op: string, f: () => void) {
    const start = new Date().getTime()
    f()
    const used = new Date().getTime() - start;
    console.log(`<${op}> costs ${used} ms`.green)
}

cost("100_000 times HashMap put & get", () => {
    const map = new HashMap()

    for (let i = 0; i < 100_000; i++) {
        map.mapPut(i, i)
        map.mapGet(i)
    }
})

cost("100_000 times ES6 Map put & get", () => {
    const map = new Map()

    for (let i = 0; i < 100_000; i++) {
        map.set(i, i)
        map.get(i)
    }
})
cost("100_000 times Tree Map put & get", () => {
    const map = new TreeMap()

    for (let i = 0; i < 100_000; i++) {
        map.mapPut(i, i)
        map.mapGet(i)
    }
})
cost("100_000 times ES6 Map put & get", () => {
    const map = new Map()

    for (let i = 0; i < 100_000; i++) {
        map.set(i, i)
        map.get(i)
    }
})