import Fastify, { FastifyRequest, FastifyReply } from 'fastify';
import jwt from '@fastify/jwt';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// @TODO Move this to a separate file if needed
// src/types/fastify.d.ts
declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

const fastify = Fastify({ logger: true });

fastify.register(jwt, { secret: process.env.JWT_SECRET || 'secret' });

fastify.decorate("authenticate", async function (request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
});

const FILE_STORAGE = process.env.FILE_STORAGE_PATH || './data';

fastify.get('/api/files', { preHandler: [fastify.authenticate] }, async (req, res) => {
  const files = fs.readdirSync(FILE_STORAGE).map(name => ({
    name,
    isDir: fs.lstatSync(path.join(FILE_STORAGE, name)).isDirectory(),
  }));
  res.send(files);
});

fastify.listen({ port: parseInt(process.env.SERVER_PORT || '3001') }, err => {
  if (err) throw err;
  console.log('API listening on port', process.env.SERVER_PORT || 3001);
});
