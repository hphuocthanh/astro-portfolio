---
title: "My React + Vite + AWS Amplify setup"
publishedAt: 2023-06-10
description: "How to deploy your React app on AWS Amplify"
slug: "react-vite-amplify-setup"
isPublish: true
---

As a frontend developer, it is always frustrating to not have your favorite React app unable to be deployed on your desired platform. AWS Amplify is not a really popular service to deploy your frontend, but it is pretty easy to use and setup for conventional webapps.

As for Vite, it is a new frontend generation tool that aims to replace CRA, but its development webpack setup may not be compatible with the AWS Amplify's defaults. Today, let's set it up the right way so you can start using Vite on AWS!

>Technology used: React 18, TypeScript, Vite, AWS Amplify

>This is inspired from [this blogpost](https://dev.to/ethanlloyd21/react-typescript-vite-amplify-setup-052023-25ge) but with some modifications that I encounter while working with Amplify

## Prerequisites

I assume you have a local React Vite app already, or you can scaffold one quickly with the following terminal command:

```bash
yarn create vite YOUR_APP_NAME --template react-ts
```

Secondly, you must have an AWS account (preferably with an IAM role) and the account has appropriate permissions/policies to AWS Amplify. Find out how to manage Amplify's policy in [this article from AWS](https://docs.aws.amazon.com/amplify/latest/userguide/security-iam-awsmanpol.html).

## Getting started

If this is a new project, you should first install dependencies:

```bash
yarn
```

After that, go to `index.html` and add the following script:

```html
<script>
    window.global = window;
    window.process = {
      env: { DEBUG: undefined },
    }
    var exports = {};
</script>
```

Then, modify `vite.config.ts` so that it includes the build directory for deployment and add alias in resolveConfig:

```ts
export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ]
  },
  build: {
    outDir: "build",
  }
})
```

Finally, add `"skipLibCheck": true,` to `"compilerOptions"` in `tsconfig.json`:

```ts
...
"compilerOptions": {
        ...,
        "skipLibCheck": true,
}
```

## Next things to do

If you also have an AWS Amplify backend setup (for connecting to Lambda and such), you should skip the default initialisation that is instructed [here](https://docs.amplify.aws/react/start/getting-started/installation/) and have it set up like this:

```bash
| Name:  YOUR_APP_NAME
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: yarn run build
| Start Command: yarn run dev
```

>Note here, the start command should be the dev script as seen in your `package.json` file.

Now, go to your AWS Console and search for Amplify. Go to your designated app, or choose 'Host a new app' and start from there. In the build settings, choose to edit amplify.yml and use the following code:

```yml
version: 1
backend:
  phases:
    build:
      commands:
        # add these commands if you use python for amplify backend
        - ln -fs /usr/local/bin/pip3.8 /usr/bin/pip3
        - ln -fs /usr/local/bin/python3.8 /usr/bin/python3
        - pip3 install --user pipenv
        # add these commands if you use python for amplify backend

        - amplifyPush --simple
frontend:
  phases:
    preBuild:
      commands:
        - nvm use 18
        - yarn install
    build:
      commands:
        - yarn run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

We change the baseDirectory to build and use the correct node version before build so that Amplify's webpack is configured correctly.


## For Amplify Typescript configure

If you run into declaration error when you add Amplify to your codebase, you can create a new file on your base directory, `aws-exports.d.ts` with the following code:

```ts
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module './aws-exports' {
	const awsExports: unknown | never
	export default awsExports
}

export = awsmobile
declare const awsmobile: any
```

Then, when you import aws-exports to your `main.ts`, it should work just fine.

## Conclusion

That is everything you need to know to start deploying your React app with Vite on AWS Amplify. If you are into the AWS ecosystem, I'd recommend checking out [Codecommit](https://docs.aws.amazon.com/codecommit/latest/userguide/getting-started.html), which is similar to GitHub.

Thank you and have a nice day!
