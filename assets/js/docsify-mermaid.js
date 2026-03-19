/*
 *
 * Copyright (c) OpenIPC  https://openipc.org  MIT License
 *
 * docsify-mermaid.js — Mermaid diagram integration plugin for Docsify
 *
 */

// Renders ```mermaid code blocks as diagrams
(function () {
  // Configure mermaid defaults
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: { useMaxWidth: true, htmlLabels: true },
    sequence: { useMaxWidth: true },
  });

  // Docsify plugin: re-render mermaid diagrams after each page load
  function mermaidPlugin(hook) {
    hook.afterEach(function (html) {
      return html;
    });

    hook.doneEach(function () {
      var blocks = document.querySelectorAll('pre[data-lang="mermaid"]');
      blocks.forEach(function (block) {
        var code = block.querySelector('code');
        if (!code) return;
        var source = code.textContent;
        var div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = source;
        block.parentNode.replaceChild(div, block);
      });

      mermaid.run({ querySelector: '.mermaid' });
    });
  }

  // Register plugin
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(mermaidPlugin);
})();
