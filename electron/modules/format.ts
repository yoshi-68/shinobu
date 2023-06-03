/**
 * JOSNを1行にする。
 *
 * @param {string} json JSON
 * @returns {string } 1行のJSON
 */
export const toOneLine = (json) => JSON.stringify(json, null, 0);
