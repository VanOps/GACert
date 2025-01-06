const request = require('supertest');
const server = require('./index');

describe('GET /', () => {
  it('should return Hello, world!', async () => {
    const response = await request(server).get('/');
    expect(response.text).toBe('Hello, world! This is my Node.js application.\n');
    expect(response.statusCode).toBe(200);
  });
});

afterAll(() => {
  server.close(); // Cierra el servidor después de las pruebas
});