# Deployment

Target: Vercel project `blackonix-contractors`, under `1solomonwakhungus-projects`.

Source: public GitHub repository `Blackonix-HQ/landing-page`, production branch `main`.

The project uses the Vite preset, `npm ci`, `npm run build`, and the `dist` output directory. Local Vercel state and generated environment files are ignored by Git.

The repository moved on 2026-10-20 with its original Git history preserved. The existing Vercel project and public URL, `https://blackonix-contractors.vercel.app`, are retained.

## Publish

```sh
vercel link --yes --project blackonix-contractors --scope 1solomonwakhungus-projects
vercel --prod --yes
```

Verify the resulting public URL returns the Blackonix page, and check its stylesheet, script, images, robots.txt, and sitemap.xml.

## Domain

The intended canonical domain is `https://blackonix.org`. Domain registration and email records are managed separately. Preserve existing MX, SPF, DKIM, and DMARC records when adding website DNS. Obtain the exact records from Vercel after adding the domain; do not guess values.

`blackonix.org` has been added to this Vercel project and Vercel verified ownership. Its DNS is hosted at Spaceship. At setup, it had no website A/CNAME records. Vercel returned these recommended apex A values: `216.198.79.1` and `64.29.17.1`. Apply the current recommended records shown in the Vercel domain dashboard to host `@`, leaving mail records intact. Recheck the domain configuration after DNS propagation. The returned CNAME target for a subdomain was `1bae33bb83eefa9f.vercel-dns-017.com.`; the `www` subdomain has not been added to the project.

## Git integration

The Vercel GitHub App has access to `Blackonix-HQ/landing-page`, and the repository is connected to the existing `blackonix-contractors` project. Pushes to `main` deploy to production. CLI publishing remains available with the commands above.

To reconnect the same repository if needed:

```sh
vercel git connect https://github.com/Blackonix-HQ/landing-page.git --yes --scope 1solomonwakhungus-projects
```

## Hosting account

The account was on Hobby at initial inspection. Vercel documents Hobby as noncommercial and lists Pro at $20/month before taxes and usage. The owner was informed and requested immediate publication. No paid plan or subscription was purchased by this setup.

Sources: https://vercel.com/docs/plans/hobby and https://vercel.com/pricing.

## Deferred work

- Configure and test the support inbox.
- Add real, approved testimonials and client case studies.
- Connect the custom domain and confirm TLS once DNS is available.
- Set the appropriate hosting plan and spending controls with the account owner.

