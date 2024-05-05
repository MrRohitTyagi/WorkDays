// Library Imports
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

// MUI Imports
import { Box, CircularProgress } from "@mui/material";

import JobCard from "./components/JobCard";
import "./JobListing.css";

const JobListing = ({ fetchMore, jobList }) => {
  return (
    <InfiniteScroll
      className="job-listing-container"
      dataLength={jobList.length} //This is important field to render the next data
      next={fetchMore}
      hasMore={jobList.length !== 0}
      loader={
        <Box className="center" style={{ textAlign: "center" }}>
          <CircularProgress size="22px" /> {" Loading..."}
        </Box>
      }
    >
      {jobList.length === 0 ? (
        <Box className="no-jobs-found-container">No Jobs Found 😕</Box>
      ) : (
        jobList.map((job, i) => <JobCard job={job} key={job.jobId + i} />)
      )}
    </InfiniteScroll>
  );
};

JobListing.propTypes = {
  fetchMore: PropTypes.func,
  jobList: PropTypes.array,
};

export default JobListing;
