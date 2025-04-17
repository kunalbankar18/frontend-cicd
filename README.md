# 🚀 Frontend CI/CD Deployment with Jenkins, Docker & GitHub Webhook

This setup uses Jenkins to automatically build and deploy the frontend application using Docker whenever a new push is made to the GitHub repository.

---

## 🐳 Docker Network

Make sure the shared Docker network is created (run only once):

```bash
docker network create myapp
```

## 🔧 Jenkins Job Setup (frontend)

    Go to Jenkins:
    http://51.21.244.204:8080/job/frontend/configure

    Enable Trigger

        Under Build Triggers:

    [x] GitHub hook trigger for GITScm polling

---

## Source Code Management

    GitHub repository URL

    Credentials (if private)

    Branch: */main or your desired branch
---

## Build Steps
Under Build > Execute shell:
```bash
    docker stop frontend || true
    docker rm frontend || true
    docker build -t frontend .
    docker run -d --name=frontend --network=myapp -p 3000:3000 frontend
```
---

 ## 🔁 GitHub Webhook Setup

In your frontend GitHub repo:

    Go to Settings → Webhooks → Add webhook

    Fill in:

        Payload URL:http://51.21.244.204:8080/github-webhook/
---

Content type:
```bash
application/json
```

SSL verification:
```bash
Disable (since using HTTP)
```
Event:
```bash
        Just the push event
```

    Click Add Webhook
---

## ✅ Test It

    Push changes to your frontend repo

    Jenkins will auto-trigger a build

    Docker will redeploy the updated frontend on port 3000