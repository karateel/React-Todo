import { useState, useEffect} from 'react'
import { Modal, Box, Typography, Input, Button } from '@mui/material'

export default function BasicModal() {
  const userName = localStorage.getItem('name') ?? '';

  const [open, setOpen] = useState(false);
  const [name, setName] = useState(userName);
  const [isEmpty, setIsEmpty] = useState(true)

  useEffect(() => {
    userName ? setOpen(false) : setOpen(true)
  }, []);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name])

  function nameHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    setIsEmpty(e.target.value === '')
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
        className={'absolute bg-slate-400 left-1/2 top-1/2 border-sky -translate-x-1/2 -translate-y-1/2 border-sky-200 shadow-sky-600/50 border-2 max-w-md w-full max-h-52 h-full flex flex-col items-center justify-center gap-5'}
>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add your name
          </Typography>
        <Input type="text" id='modal-modal-description' 
        value={name}
        onChange={nameHandler}
        placeholder='your name' />
        <Button
        onClick={handleClose}
        disabled={isEmpty}
        variant='contained'
        className={' bg-indigo-500 shadow-lg shadow-indigo-500/50'}
        type="submit">
          Submit
        </Button>
        </Box>
      </Modal>
    </div>
  );
}