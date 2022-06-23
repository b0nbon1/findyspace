import { Box } from '@mui/material';
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
    <Box display="flex" flexDirection="column" sx={{ minHeight: '98vh' }}>
      {header &&
        (user ? (
          <AuthHeader title={title} description={description} user={user} />
        ) : (
          <Header title={title} description={description} />
        ))}
      <Box sx={{ flex: 1, positon: 'relative', background: '#F8FAFC' }}>
        {children}
      </Box>
      <Footer hideLinks={hideLinks} />
    </Box>
  );
}

MainLayout.defaultProps = {
  header: true,
};

export default MainLayout;
