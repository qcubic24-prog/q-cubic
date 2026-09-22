/**
 * Configuration for the Q-CUBIC official company logo.
 * Paste any direct image link or Google Drive share link here.
 */
export const LOGO_CONFIG = {
  // If you have a Google Drive link, paste it here (e.g., 'https://drive.google.com/file/d/.../view')
  imageUrl: '',
};

/**
 * Transforms standard Google Drive sharing links into direct image viewing URLs.
 */
export function formatDriveUrl(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();

  // Pattern 1: drive.google.com/file/d/FILE_ID/...
  const matchFileD = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (matchFileD && matchFileD[1]) {
    return `https://lh3.googleusercontent.com/d/${matchFileD[1]}`;
  }

  // Pattern 2: drive.google.com/open?id=FILE_ID or uc?id=FILE_ID
  const matchId = trimmed.match(/drive\.google\.com\/(?:open|uc)\?(?:.*&)?id=([a-zA-Z0-9_-]+)/);
  if (matchId && matchId[1]) {
    return `https://lh3.googleusercontent.com/d/${matchId[1]}`;
  }

  // Otherwise return url as is
  return trimmed;
}
