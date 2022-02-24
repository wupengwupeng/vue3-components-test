import { BASE_URL_REPOSTORYTwo } from "@/lib/config";
import { RecordApis, createApiByConfig } from './utils'
const baseURL = BASE_URL_REPOSTORYTwo

type Apis =
  | 'delateApi'
  | 'createApi'
  | 'getDateApi'
  | 'updateApi'

const apis: RecordApis<Apis> = {
  delateApi: { baseURL, url: 'ExportConfig', method: 'DELETE' },
  createApi: { baseURL, url: 'ExportConfig', method: 'POST' },
  getDateApi: { baseURL, url: 'ExportConfig', method: 'GET' },
  updateApi: { baseURL, url: 'ExportConfig', method: 'PUT' }

}

export default createApiByConfig(apis)