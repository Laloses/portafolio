import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, type SxProps } from '@mui/material/styles';
import './_footer.css';

export default function Footer() {
  //Misc
  const theme = useTheme();

  const isDark = theme.palette.mode === 'dark';
  const wrapperStyle: SxProps = {
    backgroundColor: isDark
      ? theme.palette.primary.contrastText
      : theme.palette.primary.dark,
  };

  return (
    <Box role="contentinfo" className="footer" sx={wrapperStyle}>
      <Box className="map">
        <Typography variant="h5" gutterBottom>
          Mapa del sitio
        </Typography>
        <Typography variant="body2" gutterBottom>
          <a href="#home">Página principal</a>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <a href="#about">Sobre mi</a>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#experiences">Experiencias</a>
            </li>
          </ul>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <a href="#contact">Contacto</a>
        </Typography>
      </Box>
      <Box className="this_page">
        <Typography variant="h5" gutterBottom>
          De esta página
        </Typography>
        <Typography variant="body2" gutterBottom>
          <a href="#roadmap">Próximos pasos</a>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <a href="#roadmap">Comparativa de tecnologías</a>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <a href="#roadmap">Opiniones personales</a>
        </Typography>
      </Box>
      <Box className="feedback">
        <Typography variant="h5" gutterBottom>
          Feedback
        </Typography>
        <Typography variant="body2" gutterBottom>
          <a href="#faq">FAQ</a>
        </Typography>
      </Box>
      <Typography variant="body2" className="copy" gutterBottom>
        &copy; {new Date().getFullYear()} Eduardo Martell. Developer.
      </Typography>
    </Box>
  );
}
