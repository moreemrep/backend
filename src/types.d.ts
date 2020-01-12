import { Services } from './services/services'
import { Repositories } from './repositories/repositories'
import { Utils } from './utils/utils'
import { ContextRequest } from 'graphql-api-scripts'

export interface Context extends ContextRequest {
  services: Services;
  repositories: Repositories;
  utils: Utils;
  user?: string;
}
