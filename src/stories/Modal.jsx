import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


export const Modal = ({boton,titulo,parrafouno,parrafodos,parrafotres,botonModal,backgroundColor }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
            <div>
            <Button variant="outlined" onClick={handleClickOpen} style={backgroundColor && { backgroundColor }}>
                {boton}
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={backgroundColor && { backgroundColor }}>
                {titulo}
                </BootstrapDialogTitle>
                <DialogContent dividers style={backgroundColor && { backgroundColor }}>
                <Typography gutterBottom>
                    {parrafouno}
                </Typography>
                <Typography gutterBottom>
                    {parrafodos}
                </Typography>
                <Typography gutterBottom>
                    {parrafotres}
                </Typography>
                </DialogContent>
                <DialogActions style={backgroundColor && { backgroundColor }}>
                <Button onClick={handleClose} style={backgroundColor && { backgroundColor }}>
                    {botonModal}
                </Button>
                </DialogActions>
            </BootstrapDialog>
            </div>
        </>
    )
};

Modal.propTypes = {
    boton: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    parrafouno: PropTypes.string.isRequired,
    parrafodos: PropTypes.string.isRequired,
    parrafotres: PropTypes.string.isRequired,
    botonModal: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
}

Modal.defaultProps = {
    boton: 'boton',
    titulo: 'Título',
    parrafouno: 'Primer parrafo',
    parrafodos: 'Segundo Parrafo',
    parrafotres: 'Tercer Parrafo',
    botonModal: 'Guardar',
    backgroundColor: null,
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };