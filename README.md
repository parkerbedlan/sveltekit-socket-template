# SvelteKit with Socket<span>.<span/>IO Template
### Implements and deploys [this tutorial](https://linu.us/live-chat-with-sveltekit-and-socketio) to a Dokku server.

#### Before running:
1. Create a file called `.env.local` and paste inside: `VITE_APP_ORIGIN="http://localhost:3000"`
2. `npm i`
3. `npm run dev`

#### Steps to replicate:
1. [`npm init svelte my-app`](https://kit.svelte.dev/docs/introduction#getting-started)
2. [`npx svelte-add@latest tailwindcss --daisyui --forms`](https://github.com/svelte-add/tailwindcss)
3. Follow [this tutorial](https://linu.us/live-chat-with-sveltekit-and-socketio#heading-install-the-dependencies) from "Install the dependencies" to the end.
4. Create a `Dockerfile` and a `.dockerignore`

#### Steps to deploy:
##### Setting up the server:
1. Create a Docker Hub repo
2. Buy a DigitalOcean Linux Droplet with Dokku pre-installed
3. Buy a domain from Namecheap (e.g. `my-domain.com`) and create an `A Record` directed towards the `<server-ip-address>` of the Droplet
4. Create a Dokku app
	```
	ssh root@<server-ip-address>
	dokku apps:create <app-name>
	dokku domains:set <app-name> my-domain.com
	dokku proxy:ports-set <app-name> http:80:8080
	# *Push to the server* (instructions below)
	# first time: dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
	dokku letsencrypt:enable <app-name> # this automatically sets https:443:8080 if it works
	```
##### Pushing to the server:
0. Just once: Create a file called `.env.production` and inside paste: `VITE_APP_ORIGIN="https://my-domain.com"`
1. Build with `npm run build`
2. Containerize the code using Docker and upload to Docker Hub:
	```
	docker build -t <dockerhub-username>/<repo-name>:<tag-name> .
	docker push <dockerhub-username>/<repo-name>:<tag-name>
	```
3. Deploy it to your Dokku app:
	```
	ssh root@<server-ip-address>
	docker pull <dockerhub-username>/<repo-name>:<tag-name>
	dokku git:from-image <app-name> <dockerhub-username>/<repo-name>:<tag-name>
	```
	> Note: If coding on a Windows computer, `deploy_windows.bat` will run the above pushing steps for you.
