import { saveAs } from 'file-saver'
import { parseTime } from '@/lib/utils.ts'

// blob文件下载
export function blobDownload(data, fileName = `${parseTime(new Date().getTime())}.xlsx`) {
  if (!data) return;
  saveAs(new Blob([data]), fileName);
}
