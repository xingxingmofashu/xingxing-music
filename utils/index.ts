import { createDefu, defu } from 'defu';
import { extendTailwindMerge } from 'tailwind-merge';
import type { Strategy } from '~/types';

const customTwMerge = extendTailwindMerge<string, string>({
  extend: {
    classGroups: {
      icons: [(classPart: string) => classPart.startsWith('i-')],
    },
  },
});

const defuTwMerge = createDefu((obj, key, value, namespace) => {
  if (namespace === 'default' || namespace.startsWith('default.')) {
    return false;
  }
  if (namespace === 'popper' || namespace.startsWith('popper.')) {
    return false;
  }
  if (namespace.endsWith('avatar') && key === 'size') {
    return false;
  }
  if (namespace.endsWith('chip') && key === 'size') {
    return false;
  }
  if (
    (namespace.endsWith('badge') && key === 'size') ||
    key === 'color' ||
    key === 'variant'
  ) {
    return false;
  }
  if (
    typeof obj[key] === 'string' &&
    typeof value === 'string' &&
    obj[key] &&
    value
  ) {
    // @ts-ignore
    obj[key] = customTwMerge(obj[key], value);
    return true;
  }
});

export function mergeConfig<T>(strategy: Strategy, ...configs: any): T {
  if (strategy === 'override') {
    return defu({}, ...configs) as T;
  }

  return defuTwMerge({}, ...configs) as T;
}

export function omit<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keysToOmit: K[] | any[]
): Pick<T, Exclude<keyof T, K>> {
  const result = { ...object };

  for (const key of keysToOmit) {
    delete result[key];
  }

  return result;
}

export function get(
  object: Record<string, any>,
  path: (string | number)[] | string,
  defaultValue?: any
): any {
  if (typeof path === 'string') {
    path = path.split('.').map((key) => {
      const numKey = Number(key);
      return Number.isNaN(numKey) ? key : numKey;
    });
  }

  let result: any = object;

  for (const key of path) {
    if (result === undefined || result === null) {
      return defaultValue;
    }

    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}

export function generateRandom(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray<T>(array: T[]): T[] {
  // Fisher-Yates 算法
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 交换元素
  }
  return array;
}

export function parseLyric(lrc: string) {
  const lyrics = lrc.split('\n');
  const lrcObj = [];
  for (const lyric_ of lyrics) {
    const lyric = decodeURIComponent(lyric_);
    const timeReg = /\[\d*:\d*(([.:])\d*)*]/g;
    const timeRegExpArr = lyric.match(timeReg);
    if (!timeRegExpArr) continue;
    const content = lyric.replace(timeReg, '');
    for (let k = 0, h = timeRegExpArr.length; k < h; k++) {
      const t = timeRegExpArr[k];
      const min = Number(String(t.match(/\[\d*/i)).slice(1));
      const sec = Number(String(t.match(/:\d*/i)).slice(1));
      const time = min * 60 + sec;
      if (content !== '') {
        lrcObj.push({ time: time, content });
      }
    }
  }
  return lrcObj;
}

export function formatNumber(number: string | number | undefined | null) {
  number = Number(number) || 0;
  return number > 100_000_000
    ? `${Math.round(number / 100_000_000)}亿`
    : number > 100_000
      ? `${Math.round(number / 10_000)}万`
      : number;
}
