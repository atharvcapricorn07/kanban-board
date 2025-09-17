// src/lib/nhost.ts
import { NhostClient } from '@nhost/nhost-js';

console.log("[DEBUG] Nhost subdomain:", process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN);
console.log("[DEBUG] Nhost region:", process.env.NEXT_PUBLIC_NHOST_REGION);

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN!,
  region: process.env.NEXT_PUBLIC_NHOST_REGION!,
});

export default nhost; // ✅ default export
