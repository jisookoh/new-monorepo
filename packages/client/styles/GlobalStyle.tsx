import { css, Global } from '@emotion/react';
import { useMemo } from 'react';
import { Colors, FontWeight, Typography } from "@/styles";

export const GlobalStyle = () => {
    const styles = useMemo(
        () => css`
      body {
        background-color: ${Colors.White};
        padding: 0;
        margin: 0;
        scrollbar-gutter: stable;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
        word-break: normal;
        word-wrap: break-word;
        font-style: normal;
        font-family:
          Pretendard,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          'Open Sans',
          'Helvetica Neue',
          sans-serif;
        font-weight: ${FontWeight.Medium};
        ${Typography.XSmall};
        color: ${Colors.Grey900};
        letter-spacing: -0.6px;
      }

      a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }

      p {
        margin: 0;
      }

      img {
        object-fit: cover;
        max-width: 100%;
      }

      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      // Safari 에서 input 안되는 문제 수정

      input,
      textarea {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }

      input:focus {
        outline: none;
      }

      button {
        font-family: inherit;
        cursor: pointer;
        color: inherit;
        margin: 0;
        padding: 0;
        background: none;
        outline: none;
        border-width: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        padding: 0;
      }

      * {
        box-sizing: border-box;
        font-size: inherit;
      }

      *:focus {
        outline: 0;
        outline: none;
      }
    `,
        [],
    );

    return <Global styles={styles} />;
};
