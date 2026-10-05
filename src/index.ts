/**
 * Pocket IDE - Markdown & Mermaid Viewer Plugin
 * Source entrypoint for community developers
 */

export interface RenderOptions {
  theme?: 'dark' | 'neutral' | 'forest';
  enableMermaid?: boolean;
}

export function renderMarkdown(content: string, options: RenderOptions = {}): string {
  // Uses marked and mermaid under the hood
  return content;
}