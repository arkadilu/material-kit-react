import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
// material
import { Stack, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function GroupDetails() {
  const { studentid } = useParams();

  return (
    <Page title="User | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            GroupDetails {studentid}
          </Typography>
        </Stack>
      </Container>
    </Page>
  );
}

GroupDetails.propTypes = {
  // some-prop-name: PropTypes.<< prop type >> (array, string, boolean ...)
};
