import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Gap = ({ height = "10px" }) => {
  return <Box height={height} />;
};
Gap.propTypes = {
  height: PropTypes.string,
};
export default Gap;
