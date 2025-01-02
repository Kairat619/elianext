This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

t's unfortunate that you find yourself in this position. Although, it's a good lesson and part of the experience.

When planning a project you should always ask the client if they plan on editing the content (99% of the time this is the case). This always gives you a good indication of how to structure/architect the solution to cater for those requirements.

I'd say you HAVE to add a headless CMS into the mix and pull your static content from there. I've built a few NextJS projects and I've used Contentful as my CMS of choice (purely because of the free tier). There is a contentful npm package that helps you integrate with their API.

In order to render the content from Contentful in NextJS, I make use of the contentful/rich-text-react-renderer package (you can render rich text like blog posts with mixed content types etc).

There's still going to be a bit of work required to get this completed, like building your content model in Contentful, and maybe adding some content. The client can then add their own content or edit existing content (and you can teach them how to do it fairly easily, i'd charge extra for the training).

If any additional/new content types need to be added down the line, this lines you up for future 'dev' work 💰 because it's very likely that the client would not be able to setup their own content models correctly, and you would need to do the integration work as well.

All the best with the project and hopefully you get paid soon 🤙