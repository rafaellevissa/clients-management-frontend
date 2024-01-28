import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, TextField, Button, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useClient } from '../hooks/client';
import InputMask from 'react-input-mask';

const ClientEdit = () => {
  const { id } = useParams();
  const { client, findClient, putClient } = useClient();

  useEffect(() => {
    findClient(id);
  }, [id]);


  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    phone: yup.string().matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Invalid phone number').required('Phone is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    x: yup.number().required('X (location) is required'),
    y: yup.number().required('Y (location) is required'),
  });

  const handleInputChange = (e) => {
    const form = {
      ...formik.values,
      [e.target.name]: e.target.value,
    };
    formik.setValues(form);
  };

  const formik = useFormik({
    initialValues: {
      id: client?.id || '',
      name: client?.name || '',
      phone: client?.phone || '',
      email: client?.email || '',
      x: client?.x || '',
      y: client?.y || '',
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await putClient(values);
    },
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <form onSubmit={formik.handleSubmit} style={{ margin: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
            <InputMask
                mask="(99) 99999-9999"
                value={formik.values.phone}
                onChange={(e) => {
                  e.persist();
                  handleInputChange(e);
                }}
              >
                {() => (
                  <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    name="phone"
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="X (location)"
                variant="outlined"
                fullWidth
                type="number"
                name="x"
                value={formik.values.x}
                onChange={formik.handleChange}
                error={formik.touched.x && Boolean(formik.errors.x)}
                helperText={formik.touched.x && formik.errors.x}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Y (location)"
                variant="outlined"
                fullWidth
                type="number"
                name="y"
                value={formik.values.y}
                onChange={formik.handleChange}
                error={formik.touched.y && Boolean(formik.errors.y)}
                helperText={formik.touched.y && formik.errors.y}
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Save
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ClientEdit;
