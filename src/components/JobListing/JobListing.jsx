import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

import JobCard from "./components/JobCard";

import "./JobListing.css";

const JobListing = ({ fetchMore, jobList }) => {

  return (
    <InfiniteScroll
      className="job-listing-container"
      dataLength={jobList.length} //This is important field to render the next data
      next={fetchMore}
      hasMore={true}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {jobList.map((job, i) => (
        <JobCard job={job} key={job.jobId + i} />
      ))}
    </InfiniteScroll>
  );
};

JobListing.propTypes = {
  fetchMore: PropTypes.func,
  jobList: PropTypes.array,
};

export default JobListing;
