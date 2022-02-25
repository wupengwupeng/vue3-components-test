import { pick } from 'lodash'
import { initEChartsWithTheme } from './echarts'

export function matchMediaPrefersColorSchemeDark(): boolean {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
}

export function getRandomColor(): string {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 37%)`
}

export function pickAssign<T = Record<string, unknown>, K = Record<string, unknown>>(target: T, source: K): T {
  return Object.assign(target, pick(source, Object.keys(target)))
}

export const asc = (arr: number[]): number[] => arr.sort((a, b) => a - b)
export const sum = (a: number, b: number): number => a + b
export const square = (x: number): number => x ** 2
export const mean = (arr: number[]) => arr.reduce(sum) / arr.length
export function stdev(arr: number[]) {
  const m = mean(arr)
  return Math.sqrt(arr.map(x => square(x - m)).reduce(sum) / arr.length)
}

/**
 * 标准正态分布函数
 * @@param x 数据
 * @@param mean 平均数
 * @@param stdev 标准差
 */
export function normalDistributionFun(x: number, mean: number, stdev: number): number {
  return (1 / (Math.sqrt(2 * Math.PI) * stdev)) * Math.exp((-1 * (x - mean) ** 2) / (2 * stdev ** 2))
}

export function quantile(ascArr: number[], p: number): number {
  const H = (ascArr.length - 1) * p + 1
  const h = Math.floor(H)
  const v = Number(ascArr[h - 1])
  const e = H - h
  return e ? v + e * (ascArr[h] - v) : v
}

export function sliceData(data: number[], start: number, end: number): number[] {
  return data.slice(start, end + 1)
}

export function formatTableDataToJsonByKeys<T, K extends keyof T>(data: T[], keys: K[]): T[K][][] {
  return data.map(i => keys.map(key => i[key]))
}

export function initECharts(id: string) {
  const chartDom = document.getElementById(id) as HTMLElement
  return initEChartsWithTheme(chartDom)
}

// 日期格式化
export function parseTime(time: string | number, pattern?: string) {
  if (arguments.length === 0 || !time) return null;
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time);
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/');
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000;
    }
    date = new Date(time);
  }

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };

  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    // @ts-ignore
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
}


export function getUrlKey(name: any) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

// 将文字输入图片
// export function textToImg(name: any, width: any, height: any) {
//   var fsize = 120;
//   var fontSize = 120;
//   var fontWeight = "normal";
//   var canvas = document.getElementById("head_canvas_default");
//   var img1 = document.getElementById("head_canvas_default");
//   canvas.width = width;
//   canvas.height = height;
//   var context = canvas.getContext("2d");
//   context.fillStyle = 'transparent';
//   context.fillRect(0, 0, canvas.width, canvas.height);
//   context.fillStyle = "#66CCFF";
//   context.font = fontWeight + " " + fsize + "px sans-serif";
//   context.textAlign = "left";
//   context.textBaseline = "top";
//   context.fillText(name, 0, 0);
//   return canvas.toDataURL("image/png")
// }


// 是否是空对象
export function isEmporty(obj: any) {
  if (!obj) return true;
  return !Object.keys(obj).length
}

// 复制
export function copyToClipboard(element: HTMLInputElement | HTMLTextAreaElement) {
  element.select()
  document.execCommand('Copy')
  window.getSelection()?.removeAllRanges()
}

