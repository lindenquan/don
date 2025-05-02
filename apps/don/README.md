## Don

A personal financial management app based on [SolidStart](https://docs.solidjs.com/solid-start)

## Project Structure

Inside your project, you'll see the following directory structure:

```
├── index.html
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    ├── pages/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Routing & navigation. Please see the [routing docs](https://docs.solidjs.com/guides/routing-and-navigation) for more info.

- `src/components`: Shared UI components.

- `src/pages`: Web pages.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.


## Available Scripts

In the project directory, you can run:

### `pnpm run dev` or `pnpm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `pnpm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
