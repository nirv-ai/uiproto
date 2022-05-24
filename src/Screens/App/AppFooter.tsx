import text from './text.json';
import { Strong, Small, textCss } from 'src/Library';

export const AppFooter = () => (
  <footer css={textCss}>
    <Strong className="h1">{text.author}</Strong>
    <Small>for the rule breakers</Small>
  </footer>
);
