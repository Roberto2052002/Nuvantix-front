// Declarations for static assets and optional backend libs used in shared code
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module 'drizzle-orm' {
  export const sql: any;
}

declare module 'drizzle-orm/pg-core' {
  export const pgTable: any;
  export const text: any;
  export const varchar: any;
}

declare module 'drizzle-zod' {
  export function createInsertSchema(...args: any[]): any;
}

interface ImportMetaEnv {
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
