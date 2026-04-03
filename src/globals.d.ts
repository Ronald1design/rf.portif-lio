/// <reference types="vite/client" />
declare module 'react';
declare module 'react/jsx-runtime';
declare module 'react/jsx-dev-runtime';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
