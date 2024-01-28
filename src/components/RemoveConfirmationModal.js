import React from 'react';
import {  Button, Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';

const RemovalConfirmationModal = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText >
          Tem certeza que deseja remover este cliente?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} variant="outlined" color="secondary" style={{ marginRight: '8px' }}>
          Confirmar
        </Button>
        <Button onClick={onClose} variant="outlined" color="primary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemovalConfirmationModal;