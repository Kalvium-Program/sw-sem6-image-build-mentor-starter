# Deliberate mentor fault: a COPY source is outside the supplied context.
FROM node:22-bookworm-slim
WORKDIR /demo
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY missing-source ./src
COPY scripts ./scripts
CMD ["node", "scripts/preview.js"]
