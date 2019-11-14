let baseConnection = {
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/spacex',
  entities: ['./dist/models/index.js'],
  synchronize: false,
  logging: false,
  entityPrefix: 'app_',
  migrationsTableName: 'migrations',
  migrations: ['dist/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations', entitiesDir: 'src/models',
  },
};

let defaultConnection = {
  ...baseConnection, name: 'default',
};

let seedConnection = {
  ...baseConnection,
  name: 'seed',
  migrationsTableName: 'seeds',
  migrations: [
    'dist/db/seeds/*.js',
  ],
  cli: {
    migrationsDir: 'src/db/seeds',
  },
};

module.exports = [defaultConnection, seedConnection];
