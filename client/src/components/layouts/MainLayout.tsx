import React, { ReactNode } from 'react';
import Footer, { FooterProps } from './Footer';
import Header, { HeaderProps } from './Header';

function MainLayout({
  children,
  hideLinks,
  title,
  description,
  header,
}: {
  children: ReactNode;
  header?: boolean;
} & HeaderProps &
  FooterProps) {
  return (
    <>
      {header && <Header title={title} description={description} />}
      <main>{children}</main>
      <Footer hideLinks={hideLinks} />
    </>
  );
}

MainLayout.defaultProps = {
  header: true,
};

export default MainLayout;
