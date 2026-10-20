# Deployment

Target: Vercel project `blackonix-contractors`, under `1solomonwakhungus-projects`.

Source: private GitHub repository `Blackonix-HQ/houston-contractor-workflows`, production branch `main`.

The project uses the Vite preset, `npm ci`, `npm run build`, and the `dist` output directory. Source visibility is private. Local Vercel state and generated environment files are ignored by Git.

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

The source remains private. Vercel's Git connection attempt could not access the new organization repository. This does not prevent local CLI deployment. To enable automatic deployment on push, grant the Vercel GitHub installation access to `Blackonix-HQ/houston-contractor-workflows` and reconnect it in project settings. Plan restrictions can also apply to organization-owned repositories.

## Hosting account

The account was on Hobby at initial inspection. Vercel documents Hobby as noncommercial and lists Pro at $20/month before taxes and usage. The owner was informed and requested immediate publication. No paid plan or subscription was purchased by this setup.

Sources: https://vercel.com/docs/plans/hobby and https://vercel.com/pricing.

## Deferred work

- Configure and test the support inbox.
- Add real, approved testimonials and client case studies.
- Connect the custom domain and confirm TLS once DNS is available.
- Set the appropriate hosting plan and spending controls with the account owner.

