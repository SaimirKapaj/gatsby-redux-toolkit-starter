import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }

  a {
    ${tw`text-purple-600 hover:text-purple-700`};
  }
`;
