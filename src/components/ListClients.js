import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Dialog, Divider, IconButton, List, ListItem, Slide, Toolbar, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import RemovalConfirmationModal from './RemoveConfirmationModal';
import { useOptimizedRoute } from '../hooks/optimized-route';
import { useClient } from '../hooks/client';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ClientList() {
  const { routes, updateRoutes } = useOptimizedRoute();
  const { clients, findClients, removeClient } = useClient();

  const [selectedClient, setSelectedClient] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showRemovalModal, setShowRemovalModal] = useState(false);

  useEffect(() => {
    findClients();
  }, []);

  const openModal = () => {
    setShowModal(true);
    updateRoutes();
  }

  const closeModal = () => setShowModal(false);

  const handleRemoveClick = (id) => {
    setShowRemovalModal(true);
    setSelectedClient(id);
  }

  const handleRemoveConfirm = async () => {
    setShowRemovalModal(false);
    await removeClient(selectedClient);
  };

  const handleRemoveCancel = () => {
    setShowRemovalModal(false);
  };

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'x', headerName: 'X (location)', flex: 1 },
    { field: 'y', headerName: 'Y (location)', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button component={Link} to={`/edit/${params.row.id}`} variant="outlined" color="primary">
            Edit
          </Button>
          <Button onClick={() => handleRemoveClick(params.id)} variant="outlined" color="primary">
            Remove
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
        <Button component={Link} to="/create" variant="outlined" color="secondary">
          Register
        </Button>
        <Button onClick={openModal} variant="outlined" color="secondary">
          Show Routes
        </Button>
      </div>
      {clients?.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="200px"
        >
          <Typography variant="body1">There are no clients available</Typography>
        </Box>
      ) : (
        <DataGrid rows={clients} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10, 20]} pagination />
      )}

      <Dialog open={showModal} onClose={closeModal} fullScreen TransitionComponent={Transition}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={closeModal}
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Routes
          </Typography>
        </Toolbar>
        <List>
          {routes.map((client) => (
            <>
              <Divider />
              <ListItem key={client.id} style={{ padding: '40px' }}>{client.name}</ListItem>
            </>
          ))}
        </List>
      </Dialog>

      <RemovalConfirmationModal
        open={showRemovalModal}
        onClose={handleRemoveCancel}
        onConfirm={handleRemoveConfirm}
      />
    </>
  );
};

export default ClientList;