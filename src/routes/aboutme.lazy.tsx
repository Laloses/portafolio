import { Container } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import '../components/aboutme/_aboutme.css';
import { AboutMeGrowingUp } from '../components/aboutme/infancy';
import { AboutMeIntroduction } from '../components/aboutme/introduction';

export const Route = createLazyFileRoute('/aboutme')({
  component: AboutMe,
});

function AboutMe() {
  return (
    <Container id="aboutme">
      <AboutMeIntroduction />
      <AboutMeGrowingUp />
    </Container>
  );
}
