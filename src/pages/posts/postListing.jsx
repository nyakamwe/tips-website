import * as React from 'react';
import {useEffect} from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Box, Button, Divider, Stack, Typography} from '@mui/material'
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function PostList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const empCollectionRef = collection(db, 'tips')

  useEffect(()=>{
    getTips()
  }, [])

  const getTips = async()=>{
   const data = await getDocs(empCollectionRef)
   setRows(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteApi = async(id)=>{
    const tipDoc = doc(db, 'tips', id);
    await deleteDoc(tipDoc)
    Swal.fire("Deleted!", "Tip deleted successfully", 'success')
    getTips()
  }

  const handleEditTip = (id) =>{
    console.log('edit this', id)
  }

  const handleDeleteTip = (id) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert it.', 
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonColor: '#d33'
    }).then((result)=>{
        if(result.value){
            deleteApi(id)
        }
    })
  }

  const filterData = (v)=>{
    if(v){
        setRows([v])
    }else{
        setRows([])
        getTips()
    }
  }
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography
      gutterBottom
      variant='h5'
      component='div'
      sx={{padding: '25px'}}
      >
        Tips
      </Typography>
      <Divider />
      <Box height={20} />
      <Stack direction='row' spacing={2} className="my-2 mb-2">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={rows}
        sx={{ width: 300 }}
        onChange={(e, v)=> filterData(v)}
        getOptionLabel={(rows)=> rows.title || ""}
        renderInput={(params) => <TextField {...params} label="Search Tip..." />}
      />
      <Typography
        variant='h6'
        component='div'
        sx={{flexGrow: 1}}
      >
        <Button variant='contained' sx={{align: 'right'}} endIcon={<AddCircleIcon />}> ADD </Button>
      </Typography>
      </Stack>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell
                  align='left'
                  style={{ minWidth: '100px' }}
                >
                  Title
                </TableCell>

                <TableCell
                  align='left'
                  style={{ minWidth: '100px' }}
                >
                  Description
                </TableCell>

                <TableCell
                  align='left'
                  style={{ minWidth: '100px' }}
                >
                  Posted At
                </TableCell>

                <TableCell
                  align='left'
                  style={{ minWidth: '100px' }}
                >
                  Action
                </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={row.id} align='left'>
                          {row.title}
                        </TableCell>
                        <TableCell key={row.id} align='left'>
                          {row.description}
                        </TableCell>
                        <TableCell key={row.id} align='left'>
                          {row.timestamp}
                        </TableCell>
                        <TableCell key={row.id} align='left'>
                          <EditIcon sx={{color: 'blue', cursor: 'pointer'}} onClick={()=> handleEditTip(row.id)} />
                          <DeleteIcon sx={{color: 'red', cursor: 'pointer'}} onClick={()=> handleDeleteTip(row.id)} />
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}