declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module '*.webp' {
  const value: any;
  export = value;
}

// @see https://stackoverflow.com/questions/60816666/how-to-use-query-param-import-in-webpack-with-typescript-without-getting-cannot
declare module '*&useResponsiveLoader=true' {
  const defaultExport: {
    srcSet: string;
    images: {
      height: number;
      width: number;
      path: string;
    }[];
    src: string;
    placeholder: string;
    toString(): string;
  };
  export default defaultExport;
}
