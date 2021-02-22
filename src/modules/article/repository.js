import { fetchAPI } from '@lib/api'

export function find({ q, start, limit }) {
  return fetchAPI({
    path: '/posts',
    params: { q, _start: start, _limit: limit },
  })
}

export function findOneById(id) {
  return fetchAPI({
    path: `/posts/${id}`,
  })
}
