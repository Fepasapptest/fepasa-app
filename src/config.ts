const isDev = import.meta.env.DEV;
const baseUrl = isDev ? '' : '/fepasa-app';

export const config = {
  baseUrl,
  getAssetPath: (path: string) => `${baseUrl}/${path}`.replace(/\/+/g, '/'),
}; 