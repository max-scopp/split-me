/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface SplitMe {
      'd': string;
      'fixed': boolean;
      'n': number;
    }
  }

  interface HTMLSplitMeElement extends StencilComponents.SplitMe, HTMLStencilElement {}

  var HTMLSplitMeElement: {
    prototype: HTMLSplitMeElement;
    new (): HTMLSplitMeElement;
  };
  interface HTMLElementTagNameMap {
    'split-me': HTMLSplitMeElement;
  }
  interface ElementTagNameMap {
    'split-me': HTMLSplitMeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'split-me': JSXElements.SplitMeAttributes;
    }
  }
  namespace JSXElements {
    export interface SplitMeAttributes extends HTMLAttributes {
      'd'?: string;
      'fixed'?: boolean;
      'n'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;