import React, { ReactNode } from 'react';
import AuthHeader, { AuthHeaderProps } from './AuthHeader';
import Footer, { FooterProps } from './Footer';
import Header, { HeaderProps } from './Header';

function MainLayout({
  children,
  hideLinks,
  title,
  description,
  header,
  user,
}: {
  children: ReactNode;
  header?: boolean;
} & HeaderProps &
  FooterProps &
  AuthHeaderProps) {
  return (
    <>
      {header &&
        (user ? (
          <AuthHeader title={title} description={description} user={user} />
        ) : (
          <Header title={title} description={description} />
        ))}
      <main>{children}</main>
      <Footer hideLinks={hideLinks} />
    </>
  );
}

MainLayout.defaultProps = {
  header: true,
};

export default MainLayout;
