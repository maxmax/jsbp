//import Window from 'window';
//const window = new Window();
//export const documentApp = typeof document === 'undefined' ? '' : document;
export const documentApp = global.document;
export const app = documentApp;
