import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import jwt from '@fastify/jwt';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

import type { } from '@openfs/types/fastify';

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../../web/dist'),
  prefix: '/', // optional: only serve from `/`
});

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

fastify.listen({ port: parseInt(process.env.SERVER_PORT || '3000') }, err => {
  if (err) throw err;
  console.log('API listening on port', process.env.SERVER_PORT || 3000);
});
