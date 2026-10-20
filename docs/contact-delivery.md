# Contact delivery

The contact address is `support@blackonix.org`. The user has deferred mailbox setup. The website does not publish a phone number.

## Current flow

The form collects name, company, email, optional phone, and message. Its action prepares a `mailto:` draft addressed to `support@blackonix.org` in the visitor's email app. The visitor must send that draft. The website must not show a delivery confirmation or imply that it has submitted the message.

Suggested button: **Prepare email**.

Suggested explanation: “This opens a draft in your email app. Review it and press send there.”

Keep a visible, copyable email address alongside the form for visitors without a configured email app. Do not attach documents, add file uploads, or save form contents in browser storage. Ask visitors to describe the work first. Arrange document sharing directly after contact.

This is a contact path, not verified message delivery. Until the mailbox is configured and tested, receiving messages at this address remains unverified.

## Future delivery setup

1. Configure `support@blackonix.org` and verify that it receives external mail.
2. Configure the sending domain's SPF, DKIM, and DMARC records through the chosen mail service.
3. If website submission is desired, choose a mail provider and add its credential through Vercel's encrypted environment settings. Use a fixed recipient and verified sender controlled by Blackonix. Put the visitor's validated address in Reply-To.
4. Add a same-origin server endpoint with body-size limits, field validation, a honeypot, and rate limiting. Never log submitted content. Reject attachments and arbitrary recipient addresses.
5. Keep form contents available when a request fails. Show success only after the provider accepts the message. Explain that provider acceptance does not prove inbox delivery.
6. Test the complete flow with explicit authorization to send a test message. Confirm inbox receipt before treating delivery as ready.

## Read-only checks

Checked during website setup:

- Vercel CLI was authenticated as `1solomonwakhungu`.
- The existing Blackonix Vercel project had no environment variables.
- Its local source contained no contact-mail delivery integration.
- No mail-provider environment variable names were present in the current process.

No credential values were inspected or printed, no messages were sent, and no mail service was created.
