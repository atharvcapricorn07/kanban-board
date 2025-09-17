// src/app/env-test/page.tsx
export default function EnvTest() {
  return (
    <pre>{process.env.NEXT_PUBLIC_NHOST_BACKEND_URL}</pre>
  );
}
