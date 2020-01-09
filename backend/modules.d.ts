declare namespace NodeJS {
  export interface ProcessEnv {
    PRISMA_ENDPOINT: string;
    PRISMA_SECRET: string;
    APP_SECRET: string;
  }
}