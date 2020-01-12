import { Repositories } from '../repositories/repositories'
import { Services } from '../services/services'
import { AuthUtil } from './auth-util'
import { CacheUtil } from './cache-util'

export interface Utils {
  cache: CacheUtil;
  auth: AuthUtil;
}

export interface UtilProps {
  repositories: Repositories;
  services: Services;
}
