My attempt at implementing and deploying [this tutorial](https://linu.us/live-chat-with-sveltekit-and-socketio) to a Dokku server hosted on a DigitalOcean droplet.

Steps to replicate:

1. ```
npm init svelte my-app
cd my-app
npm install
npm run dev
```
2. `npx svelte-add@latest tailwindcss`
3. Follow [this tutorial](https://linu.us/live-chat-with-sveltekit-and-socketio#heading-install-the-dependencies) from "Install the dependencies" to the end.
4. Try to containerize it using Docker.
5. Try to deploy it using Dokku.
6. Cry