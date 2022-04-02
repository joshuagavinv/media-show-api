const controller = require('../controllers/index')

test('test case sample 1 - default', () => {
  const data = require('../data/sample_request_1.json')
  const response = require('../data/sample_response_1.json')
  const result = controller.filterShows(data.payload)
  expect(result).toMatchObject(response)
});

test('test case sample 2 - empty response, episodeCount = 0', () => {
  const data = require('../data/sample_request_2.json')
  const response = require('../data/sample_response_2.json')
  const result = controller.filterShows(data.payload)
  expect(result).toMatchObject(response)
});

test('test case sample 3 - empty response, drm = false', () => {
  const data = require('../data/sample_request_3.json')
  const response = require('../data/sample_response_3.json')
  const result = controller.filterShows(data.payload)
  expect(result).toMatchObject(response)
});

test('test case sample 4 - return 1 item scoobydoo', () => {
  const data = require('../data/sample_request_4.json')
  const response = require('../data/sample_response_4.json')
  const result = controller.filterShows(data.payload)
  expect(result).toMatchObject(response)
});