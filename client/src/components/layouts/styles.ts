import {
  AppBar, Box, Button, Toolbar,
} from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

export const AppBarStyled = styled(AppBar)`
  background-color: #F8FAFC;
  color: #111827;
`;

export const ToolbarStyled = styled(Toolbar)`
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: inherit;
`;

export const BecomeHost = styled(Button)`
  border: 1px solid #E6E6ED;
  color: #5D33D5;
`;

export const Seperator = styled(Box)`
  height: 30px;
  border: 1px solid #E6E6ED;
`;
