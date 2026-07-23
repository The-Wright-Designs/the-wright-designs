const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

interface EmailTemplateArgs {
  email: string;
  phone: string;
  websiteUrl: string;
  message: string;
}

export const websitePerformanceCheckEmailTemplate = ({
  email,
  phone,
  websiteUrl,
  message,
}: EmailTemplateArgs) => {
  return `<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Wright Designs</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
    <table style="width: 100%; background-color: #C86B7B;">
      <tr>
        <td>
          <h1 style="padding: 1rem;">The Wright Designs</h1>
        </td>
      </tr>
    </table>

    <table style="width: 100%; padding: 1rem;">
      <tr>
        <td>
          <h3 style="font-size: 1.25rem">Website performance check submission</h3>
          <p style="font-size: 1rem; margin-top: 1rem; font-weight: 500;">
            Email address: <span style="font-weight: 200; font-style: italic;">${escapeHtml(
              email,
            )}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Phone: <span style="font-weight: 200; font-style: italic;">${escapeHtml(
              phone,
            )}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Current website URL: <span style="font-weight: 200; font-style: italic;">${escapeHtml(
              websiteUrl,
            )}</span>
          </p>
          ${
            message
              ? `<p style="font-size: 1rem; font-weight: 500;">
            Message:
            <br />
            <span style="font-weight: 200; font-style: italic;">${escapeHtml(
              message,
            )}</span>
          </p>`
              : ""
          }
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
