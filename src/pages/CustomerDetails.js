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
      // {...key}
      label={label.toUpperCase()}
      defaultValue={student[label]}
      InputLabelProps={{
        shrink: true
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
          name: 'Test Test',
          'student id': studentid,
          par2: 'akjshdkas',
          par3: 'akjshdkas',
          par4: 'akjshdkas',
          par5: 'akjshdkas',
          par6: 'akjshdkas',
          par7: 'akjshdkas'
        });
      }, 1000);
  }, [studentid]);

  return (
    <Page title={`Student | ${student?.name}`}>
      <Container>
        {/* {student? 
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          CustomerDetails {studentid}
          </Typography>
          </Stack>
        :  */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Box
            sx={{
              width: ['100%', '20%'],
              minWidth: 100
            }}
          >
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
          <Box
            sx={{
              width: ['100%', '40%']
            }}
          >
            {student ? (
              Object.keys(student)
                .slice(0, 4)
                .map((label, index) => (
                  <DisplayInputFieldWIthDefaultValue
                    key={`student-detail-f${index}`}
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
          <Box
            sx={{
              width: ['100%', '40%']
            }}
          >
            {student ? (
              Object.keys(student)
                .slice(5, 8)
                .map((label, index) => (
                  <TextField
                    fullWidth
                    key={`student-detail-f${index}`}
                    label={label}
                    defaultValue={student[label]}
                    InputLabelProps={{
                      shrink: true
                    }}
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
        {/* } */}
      </Container>
    </Page>
  );
}

// CustomerDetails.propTypes = {
//   // some-prop-name: PropTypes.<< prop type >> (array, string, boolean ...)
// };
