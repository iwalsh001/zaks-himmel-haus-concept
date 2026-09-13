import { next } from '@vercel/functions';

// Gates every route with HTTP Basic Auth. No `config.matcher` is set on
// purpose: Vercel Routing Middleware runs on every route by default when
// matcher is omitted, which is what "gate everything, no exclusions" means
// in practice — pages, images, robots.txt included.

const REALM = "Zak's Himmel Haus — concept";

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Compares fixed-length SHA-256 hex digests byte-by-byte with no early exit,
// so neither a length mismatch nor a partial match leaks through timing.
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

function unauthorized(): Response {
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

export default async function middleware(request: Request) {
  const expectedUser = process.env.SITE_USER;
  const expectedPass = process.env.SITE_PASS;

  if (!expectedUser || !expectedPass) {
    return new Response('Server misconfigured.', { status: 500 });
  }

  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return unauthorized();
  }

  let decoded: string;
  try {
    decoded = atob(authHeader.slice('Basic '.length));
  } catch {
    return unauthorized();
  }

  const separatorIndex = decoded.indexOf(':');
  if (separatorIndex === -1) {
    return unauthorized();
  }

  const user = decoded.slice(0, separatorIndex);
  const pass = decoded.slice(separatorIndex + 1);

  const [userHash, expectedUserHash, passHash, expectedPassHash] = await Promise.all([
    sha256Hex(user),
    sha256Hex(expectedUser),
    sha256Hex(pass),
    sha256Hex(expectedPass),
  ]);

  const userOk = timingSafeEqual(userHash, expectedUserHash);
  const passOk = timingSafeEqual(passHash, expectedPassHash);

  if (!userOk || !passOk) {
    return unauthorized();
  }

  return next();
}
