# Image contract

Use `node:22-bookworm-slim`, the tested base family. It includes Node and npm; the host only needs Docker and Git.

- Working directory: `/demo`.
- Dependency inputs: root `package.json` and `package-lock.json`.
- Install locked production dependencies with `npm ci --omit=dev` during build.
- Required runtime source: `src/`; plus scripts/ for the mentor preview.
- Startup from the working directory: `node scripts/preview.js`.
- App listens on container port 3000. Publish host loopback port 8082, or another available host port.
- Expected `/health`: HTTP 200 and `{"status":"ok"}`.

This preview restricts requests to /health and reuses the reference handler.

No Dockerfile build-argument secrets, credentials, database setup or CI required. Do not change application code or remove the lockfile. Faster rebuilds and a non-root user come in the next session.
