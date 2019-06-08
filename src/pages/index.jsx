import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Samyek Sonawane.
        </BigTitle>
        <Subtitle>I'm creating noice web experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Hachiko Kitchen"
            link="#"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is currently in the Development stage.
          </ProjectCard>
          <ProjectCard
            title="CodeSnatcher"
            link="https://www.codesnatchers.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This is the Blog site of mine, where I share my knowledge with the world.
          </ProjectCard>
          <ProjectCard
            title="GeekForGeekz"
            link="https://www.geekforgeekz.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            This is my wordpress blog where Me and my small team members share the present conditions going on in tech industry.
          </ProjectCard>
          <ProjectCard
            title="Free Course's from Udemy"
            link="https://www.allfreecourse.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            I designed this platform to share the premium Udemy courses for free.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Samyek Sonawane" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:sonawanesamyek@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="#">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/samyeksonawane/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Portfolio website of Samyek Sonawane.{' '}
          <a href="https://github.com/IcedMonk/">Github</a>. Made by{' '}
          <a href="https://www.facebook.com/samyek.sonawane">Samyek Sonawane</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
