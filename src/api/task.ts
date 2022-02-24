import { BASE_URL_REPOSTORYTwo } from "@/lib/config";
import { url } from "inspector";
import { RecordApis, createApiByConfig } from './utils'
const baseURL = BASE_URL_REPOSTORYTwo

type Apis =
  | 'getDevices'
  | 'getDataUpdate'
  | 'createTask'
  | 'getSelectDate'
  | 'getCodeDate'
  | 'getToken'
  | 'changeState'
  | 'deleteTask'
  | 'updateTask'


const apis: RecordApis<Apis> = {
  getDevices: { baseURL, url: 'Task/Devices', method: 'GET' },
  getDataUpdate: { baseURL, url: 'Task', method: 'GET' },
  createTask: { baseURL, url: 'Task', method: 'POST' },
  getSelectDate: { baseURL, url: 'Task/Configs', method: 'GET' },
  getCodeDate: { baseURL, url: 'ExportConfig', method: 'GET' },
  getToken: { baseURL, url: 'Task/TriggerToken', method: 'GET' },
  changeState: { baseURL, url: 'Task/State', method: 'PATCH' },
  deleteTask: { baseURL, url: 'Task', method: 'DELETE' },
  updateTask: { baseURL, url: 'Task', method: 'PUT' }


}

export default createApiByConfig(apis)