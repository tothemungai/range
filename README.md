# Range

A simple minimal JS implementation of Python's range()

## Installation

`npm install @tothemungai/range`

`const range = require("@tothemungai/range");`

### API

`range(start: number, end: number, step: number, options?: {includeStart: boolean = true, includeEnd: boolean = true})`

## Simple iteration

```

for(let i of range(1, 3)) console.log(i);



//output

1

2

3

```

## Iteration using steps

```

for(let i of range(0, 4, 2)) console.log(i);



//output

0

2

4

```

## Spread the range values

```

[...range(1, 3)]



//produces

[1, 2, 3]

```

## Spread the range values (with steps)

```
[...range(0, 4, 2)]

//produces
[0, 2, 4]
```

## Exclude end value

```
[...range(1, 3, 1, {includeEnd: false})]

//produces
[1, 2]
```

## Exclude start value

```
[...range(1, 3, 1, {includeStart: false})]

//produces
[2, 3]
```
