# Range

A simple minimal JS implementation of Python's range()

## Installation

`npm install @tothemungai/range`

`const range = require("@tothemungai/range");`

### API

`range(start: number, end: number, step: number, options?: {includeStart: boolean, includeEnd: boolean})`

## Simple iteration

```
for(let i of range(1, 3)) console.log(i);
//output
1
2
```

## Spread the range values

```
[...range(1, 3, 1, {includeStart: true, includeEnd: true})]
//produces
[1, 2, 3]
```

## Iteration using steps

```
for(let i of range(0, 4, 2, {includeStart: true, includeEnd: true})) console.log(i);
//output
0
2
4
```
