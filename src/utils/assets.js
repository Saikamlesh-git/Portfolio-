/**
 * Asset URL and Download helper utilities.
 * Handles resolving paths correctly across local development and GitHub Pages subpaths.
 */

export const getAssetUrl = (path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${cleanPath}`;
};

/**
 * Downloads a file cleanly as a Blob.
 * This guarantees the browser triggers an actual file download with the intended
 * filename, rather than failing, downloading 404 HTML, or intercepting in a browser viewer.
 */
export const downloadFile = async (path, filename = 'Saikamlesh_M_Resume.pdf') => {
  const url = getAssetUrl(path);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up blob URL after a short delay
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);

    return true;
  } catch (error) {
    console.warn('Blob download fallback to direct anchor:', error);
    const fallbackLink = document.createElement('a');
    fallbackLink.href = url;
    fallbackLink.download = filename;
    fallbackLink.target = '_blank';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
    return false;
  }
};
