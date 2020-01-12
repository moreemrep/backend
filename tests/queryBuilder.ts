import { Input } from '../src/generated/types'

export interface Query<T> {
  query: string;
  variables?: Input<T>;
}

export function graphql<T> (query: string): Query<T> {
  return {
    query
  }
}
