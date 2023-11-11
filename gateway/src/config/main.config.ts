import { registerAs } from '@nestjs/config';

export default registerAs('main', () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  api: {
    prefix: process.env.API_PREFIX || 'api',
  },
  // Add more configurations as needed
}));
