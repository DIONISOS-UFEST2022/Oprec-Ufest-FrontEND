import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectuserToken } from '../../../../Redux/features/users/userRoleSlice';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

function DetailModal() {
    const [open, setOpen] = useState('');
    return (
        <>
            {/* <Stack direction="row" spacing={1}> */}
            <Button variant="outlined" color="neutral" onClick={() => setOpen('center')}>
                More Detail
            </Button>
            {/* <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen('fullscreen')}
            >
                Full screen
            </Button> */}
            {/* </Stack> */}
            <Modal open={!!open} onClose={() => setOpen('')}>
                <ModalDialog
                    aria-labelledby="layout-modal-title"
                    aria-describedby="layout-modal-description"
                    layout={open || undefined}
                >
                    <ModalClose />
                    <Typography
                        id="layout-modal-title"
                        component="h2"
                        level="inherit"
                        fontSize="1.25em"
                        mb="0.25em"
                    >
                        Modal Dialog
                    </Typography>
                    <Typography id="layout-modal-description" textColor="text.tertiary">
                        This is a <code>{open}</code> modal dialog. Press <code>esc</code> to
                        close it.
                    </Typography>
                </ModalDialog>
            </Modal>
        </>
    );
}



function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left"><DetailModal /></TableCell>
            </TableRow>

        </>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function DivisionMenu() {
    const token = useSelector(selectuserToken);
    const [userData, SetuserData] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/users", {
            headers:
                { Authorization: `Bearer ${token}` }
        })
            .then((result) => {
                SetuserData(result.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <TableContainer component={Paper} className="DivisionMenu">
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow
                        className='TableRow'
                        sx={{
                            backgroundColor: '#829fff',
                        }}
                    >
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Nama</TableCell>
                        <TableCell align="left">email</TableCell>
                        <TableCell align="left">status</TableCell>
                        <TableCell align="left">function</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userData.map((row) => (
                        <Row key={row.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
