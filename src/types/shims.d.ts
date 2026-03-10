declare module "react" {
  export type ReactNode = any;
  export type FC<P = {}> = (props: P) => any;
  export type JSXElementConstructor<P> = ((props: P) => any) | (new (props: P) => any);
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface IntrinsicAttributes {
    key?: string | number;
  }
}

declare module "next/link" {
  const Link: any;
  export default Link;
}

declare module "next/image" {
  const Image: any;
  export default Image;
}

declare module "next/navigation" {
  export function notFound(): never;
}

declare module "lucide-react" {
  export const ArrowLeft: any;
  export const ExternalLink: any;
  export const Download: any;
  export const FileText: any;
  export const CheckCircle: any;
  export const Github: any;
  export const Lock: any;
  export const Award: any;
  export const Calendar: any;
  export const Briefcase: any;
}
