// Library Imports
import PropTypes from "prop-types";

// MUI Imports
import { Box } from "@mui/material";

const Gap = ({ height = "10px" }) => {
  return <Box height={height} />;
};
Gap.propTypes = {
  height: PropTypes.string,
};
export default Gap;
