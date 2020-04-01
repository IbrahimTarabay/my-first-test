const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', (done) => {
    /*hey jest just wait until the done callback is called before
    you actually say this test is finished*/
  expect.assertions(1)
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87)
    done();/*you can delete done and just return swapi.getPeople and
    jest is smart enough to wait*/
  })
})

it('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87)
      expect(data.results.length).toBeGreaterThan(5)
    })
  })