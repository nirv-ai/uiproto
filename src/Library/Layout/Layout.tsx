import { useEffect, type FC, type ReactNode } from 'react';

import { HIntro, type HIntroInterface, H2, H3 } from 'src/Library';

export interface ArticleInterface extends HIntroInterface {
  children: ReactNode;
}

export const Article: FC<ArticleInterface> = ({ text, Title, SubTitle, children }) => {
  return (
    <article>
      <HIntro Title={Title} SubTitle={SubTitle} text={text} />
      {children}
    </article>
  );
};

Article.displayName = 'Article';

export interface ScreenInterface extends ArticleInterface {
  docTitle: string;
}

/**
 * TODO: (noah) see issue with screen readers at screen below
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
 */
export const Screen: FC<ScreenInterface> = ({ docTitle, ...props }) => {
  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return <Article {...props} />;
};

Screen.displayName = 'Screen';

export interface SectionInterface extends Partial<HIntroInterface> {
  children: ReactNode;
}

export const Section: FC<SectionInterface> = ({ text, Title = H2, SubTitle = H3, children }) => {
  return (
    <section>
      {text ? <HIntro Title={Title} SubTitle={SubTitle} text={text} /> : null}
      {children}
    </section>
  );
};

Section.displayName = 'Section';

export interface AsideInterface {
  children: ReactNode;
}

export const Aside: FC<AsideInterface> = ({ children }) => {
  return <aside>{children}</aside>;
};

Aside.displayName = 'Aside';

export interface NavInterface {
  children: ReactNode;
}

export const Nav = ({ children }) => {
  return <nav>{children}</nav>;
};

Nav.displayName = 'Nav';
