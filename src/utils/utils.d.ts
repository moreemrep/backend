import { AuthUtil } from './auth-util'
import { CacheUtil } from './cache-util'

export interface Utils {
  cache: CacheUtil;
  auth: AuthUtil;
}
