import { UtilProps } from '../generated/types'

export interface CacheUtil {
  getOrCache: <T>(key: string, field: string, getFunction: () => Promise<string>) => Promise<T>;
}

export default ({ repositories }: UtilProps): CacheUtil => {
  const { redis } = repositories

  return {
    getOrCache: async (key, field, getFunction) => {
      let value: any = await redis.hget(key, field)

      if (!value) {
        value = await getFunction()
        await redis.hset(key, field, value.toString())
        await redis.expire(key, 900)
      }
      return value
    }
  }
}
