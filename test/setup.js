process.env.NODE_ENV = 'test'

const database = require('../configs/database')
const mongoose = require('mongoose')
global.database = database
global.mongoose = mongoose

const server = require('../app')
global.server = server

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const should = chai.should()
const sinon = require('sinon')
require('sinon-mongoose')
const access_token = 'access_token=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MTA2Iiwic2NvcGUiOlsiYW5ub3VuY2VtZW50cyIsImVkaXRfYW5ub3VuY2VtZW50cyIsImxkYXAiLCJub3RpZmljYXRpb25zIiwiZWRpdF9ub3RpZmljYXRpb25zIiwic2VydmljZXMiLCJlZGl0X3NlcnZpY2VzIiwicHJvZmlsZSIsImVkaXRfcHJvZmlsZSIsIm5vdHkiLCJlZGl0X25vdHkiLCJlZGl0X3Bhc3N3b3JkIiwiZWRpdF9tYWlsIl0sImhhc2giOiIyMmNuOXM2bG9qZGZ0cmE5bzJkbSIsImlhdCI6MTUzMDYyODg5NiwiZXhwIjozNTMwOTI5MDE2LCJhdWQiOlsiNTlhOTlkNTk4OWVmNjQ2NTc3ODA4NzljIl19.Tg2uHcD9CdXkXlQ_6uF2Z7nm2BXHaBvHRcgOobPLdK2dlkGxuMER1lSYNrCIWzRLgNu7905gn8x88ChnCs-MGoC8Az9gvdj52Gm7SapDVYU1DIx_a7-Olm3-bRKMTO-YOMGsYlh_uKToTwypi_5HZUL81_SaxYVkO6cYrz7pTzEhP6BMQwP4Du3JxyMsqNQ5i_jipcrkXwHd0fcA88eKAbVIBfUE90lsDgfa5tC2KICGUsEhU594v60bUqNfSHVbPEg-cvYRtlD_zKfUkvRWsyRqocguWqetWQrsKBN66MFuFEVqk4bpyRFlRocDyWyslUA0KBexWyp9EZlu0hdNamwj-ypu8Fa08Fd2IVK4ycaRu1h-z5ggVHLRvbtTf-4Ll-hXOH9P341COjyXxFYdz8OjMRfpmG9m0K8qYPSRtFL5s6-vZ6hyDO9cZqWGzxE_FV6oj3ujTgC01zlAheqM2-voNyl6d7lcoDJRlRNkdRymCXbYON0me44BDkoGxn4udZ4JjdzUw40tb7l6HPcdzbyM2vVay9kHouoZ-HSRWgW-m4f5iyu-7j5hLI9IRWOl_4qI9GgcgQJjPovetaauWKOmL_WpNg8_92RDi6O6r28xLQV6dXalvyyAcu3dPjmRGCkkz0Yal9maJKR4Um80qqe7SU6hwxDED00JtEzEaAI'
chai.use(chaiHttp)
global.chai = chai
global.should = should
global.expect = expect
global.sinon = sinon
global.access_token = access_token

const Fixtures = require('node-mongodb-fixtures')
const fixtures = new Fixtures({
  dir: './fixtures',
  mute: false, // do not mute the log output
})
global.fixtures = fixtures