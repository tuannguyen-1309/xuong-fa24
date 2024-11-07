This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


_1._ npx create-next-app@14.2.16

√ Would you like to use TypeScript? ... No / _Yes_
√ Would you like to use ESLint? ... No / _Yes_
√ Would you like to use Tailwind CSS? ... No / _Yes_
√ Would you like to use `src/` directory? ... No / _Yes_
√ Would you like to use App Router? (recommended) ... No / _Yes_
√ Would you like to customize the default import alias (@/_)? ... No / _Yes_
√ What import alias would you like configured? ... @/_


<!-- Use AntDesign -->
npm i antd

<!-- đẩy code lên github -->
1. git init
2. git remote add origin https://github.com/tuannguyen-1309/xuong-fa24.git
3. git status (kiểm tra trạng thái)
4. git add . (k đẩy file node_module)
5. git commit -m "init"
6. git push --set-upstream origin master (để mặc định push nhánh này)

<!-- Đẩy code lên trình duyệt -->
1. npm i @netlify/plugin-nextjs
2. tạo file netlify.toml