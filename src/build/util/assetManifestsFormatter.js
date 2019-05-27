const path = require('path');

module.exports = (key, value) => {
  if (typeof value === 'string') {
    return value;
  }
  const manifest = value;
  /**
   * Hack to prepend js/ or css/ to manifest keys
   *
   * This might need to be reworked at some point.
   *
   * Before:
   *   {
   *     "main.js": "js/main_abcdef.js"
   *     "main.css": "css/main_abcdef.css"
   *   }
   * After:
   *   {
   *     "js/main.js": "js/main_abcdef.js"
   *     "css/main.css": "css/main_abcdef.css"
   *   }
   */
  Object.keys(manifest).forEach((src) => {
    const sourcePath = path.basename(path.dirname(src));
    const targetPath = path.basename(path.dirname(manifest[src]));
    if (sourcePath === targetPath) {
      return;
    }
    manifest[`${targetPath}/${src}`] = manifest[src];
    delete manifest[src];
  });
  return manifest;
};
