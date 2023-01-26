## Live Lingo

Example app can be found at [https://livelingo.vercel.app/](https://livelingo.vercel.app/)

First make sure that you have these environment variables defined in `.env.local` file:

```
NEXT_PUBLIC_AGORA_APP_ID=[AgoraAppId]
AGORA_CERT=[AgoraCertificate]
GOOGLE_CLIENT_ID=[GoogleClientId]
GOOGLE_CLIENT_SECRET=[GoogleClientSecret]
NEXTAUTH_SECRET=[random uuid string]
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- NextJS
- TRPC
- Agora
- Chakra UI

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
