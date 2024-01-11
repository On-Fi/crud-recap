import styled from "styled-components";
import Flex from "@/components/Layout/Flex";
import ActionLink from "@/components/Layout/ActionLink";
import Services from "@/components/Services";
import Rocketlogo from "@/components/rocketlogo";
// Public_Sans ist ein non variable Font
import { Public_Sans } from 'next/font/google'
// Die anderen Fonts sind non-variable Font
import { Comic_Neue } from 'next/font/google'
import { Lemon } from 'next/font/google'
import { Bungee_Spice } from "next/font/google";


const ComicText = styled.div`
  font-family: 'Comic Neue', sans-serif; 
  font-weight: 400;
  font-display: swap;
  color: red; 
`;

// Wenn man ein variable font benutzt muss man nicht den weight and geben
const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
})

// Bei einen non-variable Font muss man weight angeben
const comic = Comic_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// Bei einen non-variable Font muss man weight angeben
const bungee = Bungee_Spice({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// Bei einen non-variable Font muss man weight angeben
const lemonFont = Lemon({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// Ich habe die Farbe von den Fonts im <Hero> geändert indem ich hier die Farbe grün angegeben habe 
const Hero = styled.header` 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: green;   
  gap: 2rem;
  & > * {
    margin: 0;
  }
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

export default function HomePage() {
  return (
    <Flex direction="column" padding="1rem" gap="4rem" flex={1}>
      <Hero>
        <h1 className={bungee.className}>ACME Services im Bungee_Spice Font</h1>
        <Rocketlogo />
        <p className={lemonFont.className}>
          Here you can offer your help
          <br />
          and book anything you might need! im Lemon Font
        </p>
        <Flex>
          <ActionLink size="large" href="/dashboard/services/create" className={comic.className} style={{ color: 'yellow' }}>
            Share your Skills im Comic Neue Font
          </ActionLink>
          <ComicText>
            Dieser Text ist im Comic Neue Font und ist rot.
          </ComicText>
        </Flex>
      </Hero>
      <Flex direction="column" gap="2rem">
        <Flex as="h2" justifyContent="center" className={publicSans.className}>
          All Services im Public Sans Font
        </Flex>
        <Services />
      </Flex>
    </Flex>
  );
}
