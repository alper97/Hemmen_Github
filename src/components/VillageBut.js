import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});



export default function Filter() {
  return (
    <Autocomplete
      id="filter-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      renderInput={(params) => <TextField  {...params} label="İl" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'İstanbul', year: 1994 },
  { title: 'Ankara', year: 1994 },
  { title: 'Konya', year: 1994 },
  { title: 'Malatya', year: 1994 },
  { title: 'Rize', year: 1994 },
  { title: 'Kastamonu', year: 1994 },
  { title: 'Bayburt', year: 1994 },
  { title: 'İzmir', year: 1994 },
  { title: 'Karaman', year: 1994 },
  { title: 'Van', year: 1994 },
];
