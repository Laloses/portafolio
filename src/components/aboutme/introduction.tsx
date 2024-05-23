import { Typography } from '@mui/material';
import { useState } from 'react';

export function AboutMeIntroduction() {
  const [time] = useState(new Date().getFullYear() - 2022);

  return (
    <section>
      <Typography variant="h2">¿Así que quieres saber más de mi?</Typography>
      <Typography variant="body1">
        Bien, te contaré un poco sobre mi. Actualmente soy un desarrollador web,
        me gradué hace {time} años de una universidad pública en Puebla, México.
        Mi facultad, Ciencias de la Computación.
        <br />
        <br />
        Como un buen ingeniero, tengo un nato instinto por aprender cosas
        nuevas, ser curioso en todo e intentar ver cómo funcionan las cosas.
        <br />
        <br />
        ¿Nada nuevo verdad? Pero, ¿qué me hace diferente? El conocimiento que he
        adquirido a lo largo de mi vida, mi experiencia personal ha forjado mi
        carácter y mi forma de ver la vida.
      </Typography>
    </section>
  );
}
