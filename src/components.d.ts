/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DogeComponent {}
}

declare global {


  interface HTMLDogeComponentElement extends Components.DogeComponent, HTMLStencilElement {}
  var HTMLDogeComponentElement: {
    prototype: HTMLDogeComponentElement;
    new (): HTMLDogeComponentElement;
  };
  interface HTMLElementTagNameMap {
    'doge-component': HTMLDogeComponentElement;
  }
}

declare namespace LocalJSX {
  interface DogeComponent extends JSXBase.HTMLAttributes<HTMLDogeComponentElement> {}

  interface IntrinsicElements {
    'doge-component': DogeComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


