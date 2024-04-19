// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const throttle = (fn: (...args) => unknown, timeout: number) => {
  let defaultTime = new Date().getTime()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return function(...args) {
    const currentTime = new Date().getTime()
    if(currentTime - defaultTime > timeout) {
      defaultTime = currentTime
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      fn.call(this, ...args)
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (fn: (...defaultArgs: any[]) => any, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
