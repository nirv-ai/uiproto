import text from './text.json';
import { Link, Small, textCss } from 'src/Library';

export const AppFooter = () => (
  <footer css={textCss}>
    <Link
      ariaLabel="Go to NIRV.ai"
      ariaRole="link"
      className="h1"
      ElType="strong"
      href="https://nirv.ai"
      target="_blank"
    >
      {text.author}
    </Link>
    <Small>for the rule breakers</Small>
  </footer>
);
