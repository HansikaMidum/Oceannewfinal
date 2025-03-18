// In your global.d.ts file

declare module '*.jsx' {
    import { FC } from 'react';
    const value: FC<unknown>;  // You can replace `any` with specific prop types later
    export default value;
  }
  
  