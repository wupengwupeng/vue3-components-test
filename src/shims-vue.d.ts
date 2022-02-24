declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue3-cron' {
  import vue3Crom from 'vue3-cron'
  export default vue3Crom
  export function export_table_to_excel(id: string): void
  export function export_json_to_excel(option: any): void
}

declare module 'vue3-same-components' {
  import vue3SameComponents from 'vue3-same-components'
  export default vue3SameComponents
}
