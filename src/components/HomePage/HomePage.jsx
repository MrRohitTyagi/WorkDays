// MUI Imports
import { Box, CircularProgress, Typography } from "@mui/material";

// Other Imports
import FilterSection from "../FiltersSection/FilterSection";
import JobListing from "../JobListing/JobListing";
import useFetchJobs from "@/hooks/useFetchJobs";

import "./homePage.css";

const HomePage = () => {
  const { fetchMore, jobList, isLoading } = useFetchJobs();

  return (
    <div className="homepage-container">
      {isLoading ? (
        <Box className="full-screen-loader">
          <CircularProgress />
          <Typography>Hold Tight We&apos;re Loading</Typography>
        </Box>
      ) : (
        <>
          <FilterSection />
          <JobListing jobList={jobList} fetchMore={fetchMore} />
        </>
      )}
    </div>
  );
};

export default HomePage;
