import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import './_homeRoadmap.css';

export default function HomeRoadmap() {
  return (
    <Container className="roadmap">
      <Typography variant="h2">Roadmap</Typography>
      <Typography variant="h5">
        Las tecnologías que se han usado hasta ahora son:
        <Stack spacing={2} mt={4}>
          <span> 🚧 default: React CSR (Client Side Rendering)</span>
        </Stack>
        <br />
        Las tecnologías que se usarán para los próximos deploys son:
        <Stack spacing={2} mt={4}>
          {/* React */}
          <span> 📅 React SSR (Server Side Rendering)</span>
          <span> 📅 React SSG (Static Site Generation)</span>
          {/* Solid */}
          <span> ⏰ SolidJS CSR (Client Side Rendering)</span>
          <span> 📅 SolidJS SSR (Server Side Rendering)</span>
          <span> 📅 SolidJS SSG (Static Site Generation)</span>
          {/* Astro */}
          <span> ⏰ Astro CSR (Client Side Rendering)</span>
          <span> 📅 Astro SSR (Server Side Rendering)</span>
          <span> 📅 Astro SSG (Static Site Generation)</span>
          {/* NextJS */}
          <span> ⏰ NextJS CSR (Client Side Rendering)</span>
          <span> 📅 NextJS SSR (Server Side Rendering)</span>
          <span> 📅 NextJS SSG (Static Site Generation)</span>
        </Stack>
      </Typography>
    </Container>
  );
}
