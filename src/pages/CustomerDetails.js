import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

// material
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// components
import Paper from '../theme/overrides/Paper';
import Page from '../components/Page';
// ----------------------------------------------------------------------
function DisplayInputFieldWIthDefaultValue({ student, label }) {
  return (
    <TextField
      fullWidth
      label={label.toUpperCase()}
      defaultValue={student[label]}
      InputLabelProps={{
        shrink: true
      }}
      sx={{
        p: 1
      }}
    />
  );
}
// ----------------------------------------------------------------------

export default function CustomerDetails() {
  const { studentid } = useParams();
  const [student, setStudent] = useState();

  useEffect(() => {
    if (studentid)
      setTimeout(() => {
        setStudent({
          key: studentid,
          name: 'Test Test',
          'tax id': 'akjshdkas',
          birthdate: 'akjshdkas',
          'training location': 'akjshdkas',
          rank: 'asdasd',
          'next exam': 'alksjd',
          address: 'akjshdkas',
          phone: 'akjshdkas',
          email: 'akjshdkas',
          "mother's name": 'akjshdkas',
          "mother's phone": 'akjshdkas',
          "father's name": 'akjshdkas',
          "father's phone": 'akjshdkas'
        });
      }, 1000);
  }, [studentid]);

  return (
    <Page title={`Student | ${student?.name}`}>
      <Container>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Box sx={{ width: ['100%', '20%'], minWidth: 200 }}>
            {student ? (
              <Box
                component="img"
                src="/static/mock-images/avatars/avatar_1.jpg"
                sx={{ width: '100%' }}
              />
            ) : (
              <Skeleton variant="rectangular" animation="wave" sx={{ height: [150, 250] }} />
            )}
          </Box>
          <Box sx={{ width: ['100%', '30%'], p: 0.3 }}>
            {student ? (
              Object.keys(student)
                .filter((l) => l !== 'key')
                .slice(0, 5)
                .map((label, index) => (
                  <DisplayInputFieldWIthDefaultValue
                    key={`${student.key}-f${index}`}
                    student={student}
                    label={label}
                  />
                ))
            ) : (
              <>
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
              </>
            )}
          </Box>
          <Box sx={{ width: ['100%', '30%'], p: 0.3 }}>
            {student ? (
              Object.keys(student)
                .filter((l) => l !== 'key')
                .slice(5, 9)
                .map((label, index) => (
                  <DisplayInputFieldWIthDefaultValue
                    key={`${student.key}-f${index}`}
                    student={student}
                    label={label}
                  />
                ))
            ) : (
              <>
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
              </>
            )}
          </Box>
          <Box sx={{ width: ['100%', '30%'], p: 0.3 }}>
            {student ? (
              Object.keys(student)
                .filter((l) => l !== 'key')
                .slice(9)
                .map((label, index) => (
                  <DisplayInputFieldWIthDefaultValue
                    key={`${student.key}-f${index}`}
                    student={student}
                    label={label}
                  />
                ))
            ) : (
              <>
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
                <Skeleton variant="text" animation="wave" height={80} />
              </>
            )}
          </Box>
        </Stack>
      </Container>
    </Page>
  );
}

// CustomerDetails.propTypes = {
//   // some-prop-name: PropTypes.<< prop type >> (array, string, boolean ...)
// };
