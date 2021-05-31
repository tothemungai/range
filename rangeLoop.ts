interface RangeFunction {
  includeStart: boolean;
  includeEnd: boolean;
}

function* range(
  start: number,
  end: number,
  step: number = 1,
  options: RangeFunction = { includeEnd: true, includeStart: true }
): Generator<number> {
  if (typeof start !== "number")
    throw new TypeError(`'start' must be of type number, not ${typeof start}`);
  if (typeof end !== "number")
    throw new TypeError(`'end' must be of type number, not ${typeof end}`);
  if (typeof step !== "number")
    throw new TypeError(`'step' must be of type number, not ${typeof step}`);

  options = {
    //@ts-ignore
    includeEnd: true,
    //@ts-ignore
    includeStart: true,
    ...options,
  };

  const actualStart = options.includeStart ? start : start + 1;
  const actualEnd = options.includeEnd ? end : end - 1;

  for (let i = actualStart; i <= actualEnd; i = i + step) {
    yield i;
  }
}

module.exports = range;
