import { UtilProps } from './utils'

export interface CacheUtil {
  getOrCache: (key: string, getFunction: () => Promise<string>) => Promise<string>;
}

export default ({ repositories }: UtilProps): CacheUtil => {
  const { redis } = repositories

  return {
    getOrCache: async (key, getFunction) => {
      let value = await redis.get(key)

      if (!value) {
        value = await getFunction()
        await redis.set(key, value)
      }
      return '' + value
    }
  }
}
