import { Services } from '../services/services'
import { Repositories } from '../repositories/repositories'
import { Utils } from '../utils/utils'
import { ContextRequest, CronProps } from 'graphql-api-scripts'

export interface Context extends ContextRequest<Repositories, Services, Utils> {
  user?: string;
}

export type Cron = CronProps<Repositories, Services, Utils>

export interface UtilProps {
  repositories: Repositories;
  services: Services;
}
