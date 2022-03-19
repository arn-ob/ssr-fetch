/**
 *
 * @param url /api/Post
 * @param header Any Header you like
 * @returns Object
 */
declare const rPost: (url: string, data: any, header?: object) => Promise<any>;
/**
 *
 * @param url /api/Get
 * @param header Any Header you like
 * @returns Object
 */
declare const rGet: (url: string, header?: object) => Promise<any>;
/**
 *
 * @param url /api/Put
 * @param header Any Header you like
 * @returns Object
 */
declare const rPut: (url: string, header?: object) => Promise<any>;
/**
 *
 * @param url /api/Patch
 * @param header Any Header you like
 * @returns Object
 */
declare const rPatch: (url: string, header?: object) => Promise<any>;
/**
 *
 * @param url /api/Delete
 * @param header Any Header you like
 * @returns Object
 */
declare const rDelete: (url: string, header?: object) => Promise<any>;
export { rPost, rGet, rPut, rPatch, rDelete };
