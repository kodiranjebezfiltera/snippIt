import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { addCategory } from '../utils/command';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

interface CommandFormDataInterface {
  name: string;
  command: string;
  description?: string;
  category: string;
}

interface CommandFormDataErrorInterface {
  name: boolean;
  command: boolean;
  category: boolean;
}

const AddCommand = () => {
  const [open, setOpen] = useState(false);
  const [isNewCommand, setIsNewCommand] = useState(false);
  const [addNewCategory, setAddNewCategory] = useState('');

  const [commandFormData, setCommandFormData] =
    useState<CommandFormDataInterface>({
      name: '',
      command: '',
      description: '',
      category: '',
    });

  const [commandFormDataError, setCommandFormDataError] =
    useState<CommandFormDataErrorInterface>({
      name: false,
      command: false,
      category: false,
    });

  console.log('commandFormData', commandFormData);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const value = event.target.value;
    const name = event.target.name;

    setCommandFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log('value', value);
  };

  // const handleMultiselectChange = (event: SelectChangeEvent) => {
  //   setCommandFormData()
  // };

  console.log('isNewCommand', isNewCommand);

  const submitCategory = async () => {
    await addCategory('test category');
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Command</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new command
          </Typography>

          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={commandFormData.name}
              error={commandFormDataError.name}
              onChange={handleInputChange}
            />

            <TextField
              name="command"
              label="Command"
              variant="outlined"
              value={commandFormData.command}
              error={commandFormDataError.command}
              onChange={handleInputChange}
            />

            <TextField
              name="description"
              label="Description"
              variant="outlined"
              value={commandFormData.description}
              onChange={handleInputChange}
            />

            {!isNewCommand && (
              <Select
                name="category"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={commandFormData.category}
                label="Category"
                onChange={handleInputChange}
                disabled={isNewCommand}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  checked={isNewCommand}
                  onChange={(event) => setIsNewCommand(event.target.checked)}
                />
              }
              label="New category?"
            />
            {isNewCommand && (
              <TextField
                name="addNewCategory"
                label="Add New Category"
                variant="outlined"
                value={addNewCategory}
                onChange={(event) => {
                  setAddNewCategory(event.target.value);
                }}
              />
            )}
          </Box>

          <Button onClick={submitCategory}>Submit category</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCommand;
