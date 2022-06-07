import { text } from './text';
import { Link, Small } from 'src/Library';

export const AppFooter = () => (
  <footer>
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
