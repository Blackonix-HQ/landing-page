# Blackonix contractor workflows

The one-page Blackonix website for Greater Houston contractors. The site introduces custom tools for bids, submittals, field paperwork, and invoice tracking, with a free test using one old bid package.

Public repository: https://github.com/Blackonix-HQ/landing-page

Live website: https://blackonix-contractors.vercel.app

## Local development

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

Vite builds the static website into `dist/`. Photography and fonts are served locally. No customer documents or form contents are stored by the application.

## Contact

The contact form prepares an email draft to `support@blackonix.org`. The visitor sends it through their email app. It does not submit to a server or confirm delivery. Mailbox setup and receipt testing are deferred at the owner's request. No public phone number is displayed.

See [contact delivery](docs/contact-delivery.md) before enabling direct submission or uploads.

## Content rules

Keep the copy plain and concrete. Do not publish invented customer quotes, company logos, results, time savings, certifications, or final prices. The bid sample is illustrative. Replace testimonial placeholders only with approved real client feedback.

Keep operational customer data and credentials out of this repository. Arrange document sharing directly with the prospect.

## Design and deployment

- [Product context](PRODUCT.md)
- [Design system](DESIGN.md)
- [Template references](docs/design-references.md)
- [Asset credits](docs/assets.md)
- [Deployment notes](docs/deployment.md)

