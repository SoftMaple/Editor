import { FC } from "react";
import styled from "@emotion/styled";
import { SourceCodeWrapper } from "./latex-container.style";

const Wrapper = styled(SourceCodeWrapper)`
  /*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS

  highlight.js/styles/github.css
*/

  .hljs {
    color: #24292e;
    background: #ffffff;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    /* prettylights-syntax-keyword */
    color: #d73a49;
  }

  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    /* prettylights-syntax-entity */
    color: #6f42c1;
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-variable,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id {
    /* prettylights-syntax-constant */
    color: #005cc5;
  }

  .hljs-regexp,
  .hljs-string,
  .hljs-meta .hljs-string {
    /* prettylights-syntax-string */
    color: #032f62;
  }

  .hljs-built_in,
  .hljs-symbol {
    /* prettylights-syntax-variable */
    color: #e36209;
  }

  .hljs-comment,
  .hljs-code,
  .hljs-formula {
    /* prettylights-syntax-comment */
    color: #6a737d;
  }

  .hljs-name,
  .hljs-quote,
  .hljs-selector-tag,
  .hljs-selector-pseudo {
    /* prettylights-syntax-entity-tag */
    color: #22863a;
  }

  .hljs-subst {
    /* prettylights-syntax-storage-modifier-import */
    color: #24292e;
  }

  .hljs-section {
    /* prettylights-syntax-markup-heading */
    color: #005cc5;
    font-weight: bold;
  }

  .hljs-bullet {
    /* prettylights-syntax-markup-list */
    color: #735c0f;
  }

  .hljs-emphasis {
    /* prettylights-syntax-markup-italic */
    color: #24292e;
    font-style: italic;
  }

  .hljs-strong {
    /* prettylights-syntax-markup-bold */
    color: #24292e;
    font-weight: bold;
  }

  .hljs-addition {
    /* prettylights-syntax-markup-inserted */
    color: #22863a;
    background-color: #f0fff4;
  }

  .hljs-deletion {
    /* prettylights-syntax-markup-deleted */
    color: #b31d28;
    background-color: #ffeef0;
  }

  .hljs-char.escape_,
  .hljs-link,
  .hljs-params,
  .hljs-property,
  .hljs-punctuation,
  .hljs-tag {
    /* purposely ignored */
  }
`;

type LightWrapperProps = {
  children: React.ReactNode;
};

export const LightWrapper: FC<LightWrapperProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
