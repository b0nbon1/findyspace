import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

export const AppBarStyled = styled(AppBar)`
  background-color: #fff;
  color: #111827;
`;

export const ToolbarStyled = styled(Toolbar)`
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: inherit;
`;

export const BecomeHost = styled(Button)`
  border: 1px solid #e6e6ed;
  color: #5d33d5;
`;

export const Seperator = styled(Box)`
  height: 30px;
  border: 1px solid #e6e6ed;
`;
