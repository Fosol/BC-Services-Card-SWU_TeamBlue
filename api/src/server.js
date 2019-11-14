import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import routes from './routes';
import config from 'config';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import log from 'npmlog';
import {types} from 'pg';
import Postgres from 'pg-promise';
import errorHandler from './errors';
import moment from 'moment';
import Keycloak from 'keycloak-connect';
import proxy from 'http-proxy-middleware';

const client = new Postgres();
const db = client(
    config
        .get('connectionstrings.demo')
        .replace('{HOST}', config.get('datasource.host')),
);
const app = express();

// Use moment to convert the postgresql timestamp values.
types.setTypeParser(1114, (str) => moment.utc(str));

// TODO - Limit to development only
app.use('/auth', proxy({target: 'http://keycloak:8180', changeOrigin: true}));

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

log.level = config.get('logging.loglevel');
log.addLevel('debug', 1500, {
  fg: 'cyan',
});

app.use(morgan(config.get('logging.morgan.format')));

log.info('environment', config.util.getEnv('NODE_ENV'));

const memoryStore = new session.MemoryStore();

app.use(
    session({
      secret: 'mySecret',
      resave: false,
      saveUninitialized: true,
      store: memoryStore,
    }),
);

const keycloakConfig = config.get('keycloak');
const keycloak = new Keycloak(
    {
      store: memoryStore,
    },
    keycloakConfig,
);

app.use(
    keycloak.middleware({
      logout: '/logout',
      admin: '/admin',
    }),
);

// Add routes to API.
routes({app, db, keycloak});
errorHandler(app);

// Prevent unhandled errors from crashing application
process.on('unhandledRejection', (err) => {
  if (err && err.stack) {
    log.error(err.stack);
  }
});

// Graceful shutdown support
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

/**
 * Handles process shutdown.
 * @function shutdown
 * @return {void}
 */
function shutdown() {
  log.info('shutdown', 'Received kill signal. Shutting down...');
  state.isShutdown = true;
  pool.end();
  // Wait 3 seconds before hard exiting
  setTimeout(() => process.exit(), 3000);
}

app.listen(config.get('express.port'), () => {
  log.info('port', 'listening on port %j', config.get('express.port'));
});

export default app;
