import { Section, HeaderSt, Nav, NavLinkSt } from './Header.styled';

export default function Header() {
  return (
    <Section>
      <HeaderSt>
        <Nav>
          <NavLinkSt to="/">Home</NavLinkSt>
          <NavLinkSt to="movies">Movies</NavLinkSt>
        </Nav>
      </HeaderSt>
    </Section>
  );
}
