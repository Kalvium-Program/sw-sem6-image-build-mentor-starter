# LU 2.6: Mentor demonstration

A deliberately broken mentor image recipe. Repair the incorrect COPY source live.

Read `docs/image-contract.md`, `package.json`, the lockfile and relevant source first. Dockerfile build uses only supplied files and a running Docker engine; no host Node/npm install is required.

## Reproduce

```bash
docker build -t campus-preview:lu26-demo .
docker run -d --name lu26-demo -p 127.0.0.1:8082:3000 campus-preview:lu26-demo
curl --noproxy '*' -i http://127.0.0.1:8082/health
```

The initial build fails at the missing COPY source. Correct that source to the real src/ directory, then build again.

Read state and logs before changing code. Keep host port and request URL consistent. If the name already exists, inspect your previous exercise object before removing it. Do not stop other processes or containers.

## Cleanup

```bash
docker stop lu26-demo
docker rm lu26-demo
```

Use dummy data only. `.dockerignore` excludes local environment values and installed host dependencies from the build context. Do not use real secrets during this practice.
