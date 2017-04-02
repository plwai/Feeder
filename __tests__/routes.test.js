import { helloEndpointRoute } from '../src/shared/routes'

test('helloEndpointRoute', () => {
  expect(helloEndpointRoute()).toBe('/ajax/hello/:num')
  expect(helloEndpointRoute(123)).toBe('/ajax/hello/123')
})
