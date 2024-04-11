
/**
 *  解析出资源的URL
 * @param {*} image 
 * @returns 
 */
export const getAssetsURL = (image) => {
  const moduleURL = new URL(import.meta.url);
  const assetsURL = new URL('../assets/img/' + image, moduleURL);
  return assetsURL.href;
};
