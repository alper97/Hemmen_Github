import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          class='flex justify-between items-center px-5 font-semibold'
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }} >
            <p class="font-semibold ">1 Soru</p>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} class="opacity-40 font-semibold ">Ek açıklama fiyat vs</Typography>

        </AccordionSummary>
        <AccordionDetails class="bg-opacity-25 bg-zinc-300 w-full p-4" >
          <Typography>
            Soru açıklama içeriği Lorem ipsum We provides free estimates with no commitment. We always provide a detailed bid upfront, this eliminates any confusion and you always know what you are paying for before any work begins.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          class='flex justify-between items-center px-5 '
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }}>
          <p class="font-semibold ">2 Soru</p>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} class="opacity-40 font-semibold "></Typography>

        </AccordionSummary>
        <AccordionDetails class="bg-opacity-25 bg-zinc-300 w-full p-4" >
          <Typography>
            Soru açıklama içeriği Lorem ipsum We provides free estimates with no commitment. We always provide a detailed bid upfront, this eliminates any confusion and you always know what you are paying for before any work begins.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          class='flex justify-between items-center px-5 '
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }}>
          <p class="font-semibold ">3 Soru</p>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} class="opacity-40 font-semibold "></Typography>

        </AccordionSummary>
        <AccordionDetails class="bg-opacity-25 bg-zinc-300 w-full p-4" >
          <Typography>
            Soru açıklama içeriği Lorem ipsum We provides free estimates with no commitment. We always provide a detailed bid upfront, this eliminates any confusion and you always know what you are paying for before any work begins.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          class='flex justify-between items-center px-5 '
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }}>
          <p class="font-semibold ">4 Soru</p>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} class="opacity-40 font-semibold ">Test</Typography>

        </AccordionSummary>
        <AccordionDetails class="bg-opacity-25 bg-zinc-300 w-full p-4" >
          <Typography>
            Soru açıklama içeriği Lorem ipsum We provides free estimates with no commitment. We always provide a detailed bid upfront, this eliminates any confusion and you always know what you are paying for before any work begins.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          class='flex justify-between items-center px-5 '
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }}>
          <p class="font-semibold ">5 Soru</p>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} class="opacity-40 font-semibold "></Typography>

        </AccordionSummary>
        <AccordionDetails class="bg-opacity-25 bg-zinc-300 w-full p-4" >
          <Typography>
            Soru açıklama içeriği Lorem ipsum We provides free estimates with no commitment. We always provide a detailed bid upfront, this eliminates any confusion and you always know what you are paying for before any work begins.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
