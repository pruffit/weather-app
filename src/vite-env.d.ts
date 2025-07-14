/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Для поддержки импортов CSS
declare module '*.css' {
  const content: string;
  export default content;
}
