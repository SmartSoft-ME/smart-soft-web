import * as React from 'react';
import { FC } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface FormDialogProps {
  open: boolean;
  onClose: () => void;
}


const FormDialog: FC<FormDialogProps> = ({open , onClose}) => {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Talk to an expert</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please fill out the form below and one of our knowledgeable finance and accounting representatives will get back to you.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="Email"
            fullWidth
            variant="standard"
            required
          />
           <TextField
            autoFocus
            margin="dense"
            id="Firstname"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            required
          />
           <TextField
            autoFocus
            margin="dense"
            id="Lastname"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            required
          />
            <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Business Phone"
            type="tel"
            fullWidth
            variant="standard"
            required
          />
            <TextField
            autoFocus
            margin="dense"
            id="inquiry"
            label="Your Inquiry (Optional)"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
              Contact me
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default FormDialog;
