## How to Run this Example

Copy this files and proto/js to your project, so it looks like this:

```
.
├── client.ts
├── package.json
├── package-lock.json
├── proto
│   └── js
├── tsconfig.json
└── usetoken.ts
```

Install packages with your preferred package manager, like `npm i`.

You have two examples for your use here.

1. `client.ts` - retrieves token or prints an error (don't forget to replace the domain name and credentials with yours)
2. `usetoken.ts` - retrieves accounts available to authorized user(don't forget to replace the token with yours)

Run them with `ts-node`.
