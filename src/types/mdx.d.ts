// Global type definitions for MDX
declare module '*.mdx' {
  const MDXComponent: (props: Record<string, unknown>) => JSX.Element
  export default MDXComponent
}

// Extend the MDX types if you want custom components
declare module '@mdx-js/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface MDXComponents {
    // Add custom MDX component types here if needed
    // Example: CustomComponent?: React.ComponentType<Record<string, unknown>>
  }
}