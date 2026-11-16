// Vercel Blob : les stores récents s'authentifient via OIDC (BLOB_STORE_ID),
// les anciens via BLOB_READ_WRITE_TOKEN (éventuellement avec un préfixe personnalisé).
export function blobToken(): string | undefined {
  if (process.env.BLOB_READ_WRITE_TOKEN) return process.env.BLOB_READ_WRITE_TOKEN;
  for (const [key, value] of Object.entries(process.env)) {
    if (value && key.endsWith("_READ_WRITE_TOKEN")) return value;
  }
  return undefined;
}

export function blobConfigured(): boolean {
  return Boolean(blobToken() || process.env.BLOB_STORE_ID);
}
