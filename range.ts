export type Range = number | string;

interface _Iterable extends Iterable<{}> {
  length: number;
}

const FIRST_LETTER = 0;
const LAST_LETTER = 123;

const firstChar = (value: string) => value.charCodeAt(FIRST_LETTER);

class _Array<T> extends Array<T> {
  static range(
    from: Range,
    to: Range,
    step: number = 1,
  ): Range[] | undefined {
    if (typeof from === "number" && typeof to === "number") {
      return Array.from(
        (<_Iterable>{ length: Math.floor((to - from) / step) + 1 }),
        (v, k) => from + k * step,
      );
    } else if (typeof to === "string" && typeof from === "string") {
      const [charStart, charTo] = [firstChar(from), firstChar(to) + 1];
      const lenCharTo = charTo - charStart;

      if (lenCharTo < FIRST_LETTER) return;
      if (lenCharTo > LAST_LETTER) return;

      const _arr = [];
      for (let i = charStart; i < charTo; i += step) {
        _arr.push(String.fromCharCode(i));
      }
      return _arr;
    } else {
      return;
    }
  }
}

export const range = _Array.range;
