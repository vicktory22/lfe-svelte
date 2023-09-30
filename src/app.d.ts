// See https://kit.svelte.dev/docs/types#app

import type { LibSQLDatabase } from "drizzle-orm/libsql";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      db: LibSQLDatabase;
      weekId: number;
    }
    interface PageData {
      games: any[];
      game: any;
    }
    interface Platform {
      env: {
        COUNTER: DurableObjectNamespace;
      };
      context: {
        waitUntil(promise: Promise<any>): void;
      };
      caches: CacheStorage & { default: Cache }
    }
  }
}

export { };
