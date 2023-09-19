import { Autocomplete, Box, TextField } from '@mui/material'
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const SearchUser = () => {
   const {allUsers} = useContext(ChatContext);
  return (
    <Box bgcolor={'wheat'}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={allUsers.map((option) => option.name)}
        onChange={(e, value) => console.log(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Box>
  )
}

export default SearchUser
