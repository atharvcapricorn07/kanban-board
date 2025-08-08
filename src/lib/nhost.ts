import { createClient } from '@nhost/nhost-js';

const nhost = createClient({
  backendUrl: process.env.NHOST_BACKEND_URL || 'https://<your-project>.nhost.app',
});

export default nhost;
