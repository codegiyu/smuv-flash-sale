const useHomepageTemplate = (htmlContent: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Smuv Flash Sale Documentation</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; line-height: 1.6; }
        h1, h2, h3 { color: #333; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <main>
        ${htmlContent}
      </main>
    </body>
    </html>
  `;
};

export { useHomepageTemplate };
