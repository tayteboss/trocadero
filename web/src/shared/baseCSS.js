import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import studioPro from '../assets/fonts/StudioPro-Regular.woff'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'StudioPro-Regular';
        src: url(${studioPro});
    }

    body, html, #root {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }
    body {
        background: white;
        margin: 0;
        font-size: ${theme.size.medium};
        color: ${theme.colours.default.light};
        font-family: ${theme.fonts.studioPro};

        &.no-scroll {
            overflow: hidden;
        }
    }
    a {
        color: ${theme.colours.orange};
        text-decoration: none;
    }
    a, button { cursor: pointer }

    ::selection {
        background: ${theme.colours.lightGray};
    }

    html, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline;
    }

    main, article, aside, figure, footer, header, nav, section, details, summary {display: block;}

    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html {overflow-y: scroll;}

    a {margin: 0; padding: 0; font-size: 100%; vertical-align: baseline; background: transparent;}

    button, input, select, textarea {margin: 0;}
    button:focus {outline:0;}
`
export default GlobalStyle
