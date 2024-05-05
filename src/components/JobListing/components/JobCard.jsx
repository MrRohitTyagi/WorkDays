// Library Imports
import PropTypes from "prop-types";

// MUI Imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions, Tooltip } from "@mui/material";

// Other Imports
import Gap from "@/components/core/Gap/index.jsx";
import Job from "@/entities/jobEntity";

import "./jobCard.css";

function JobCard({ job = new Job() }) {
  const isSalaryRangeProvided = job.maxSalary && job.minSalary;

  return (
    <Card className="card-container">
      <Box>
        <Box className="card-header" flex={true} flexDirection={"row"}>
          <img
            height="50px"
            width="50px"
            src={job.logoUrl}
            alt="green iguana"
          />
          <Box
            className="card-header-info"
            flex={true}
            flexDirection={"column"}
            gap="2px"
          >
            <Typography
              sx={{ opacity: 0.7, fontWeight: 600, letterSpacing: "1px" }}
              fontSize={"13px"}
              variant="h5"
              component="div"
            >
              {job.companyName}
            </Typography>
            <Typography variant="h5" component="div" fontSize={"14px"}>
              {job.role}
            </Typography>
            <Typography variant="h6" component="div" fontSize={"11px"}>
              {job.location}
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ padding: "16px 0px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography
              sx={{ fontWeight: 200 }}
              variant="h5"
              component="div"
              fontSize={"14px"}
            >
              Estimated Salary: {`${job.minSalary} - ${job.maxSalary} LPA`}
            </Typography>
            <Tooltip
              placement="top"
              title={
                isSalaryRangeProvided
                  ? "Offered salary range"
                  : "Estimated by Weekday. Not provided by employer"
              }
            >
              <span style={{ cursor: "default" }}>
                {isSalaryRangeProvided ? ` ✅` : ` ⚠️`}
              </span>
            </Tooltip>
          </Box>
          <Gap />
          <Typography
            sx={{ fontWeight: 500 }}
            variant="h5"
            component="div"
            fontSize={"15px"}
          >
            About Company:
          </Typography>
          <Box
            className="Job-description-box"
            sx={{ fontSize: "14px", fontWeight: 300 }}
          >
            {job.description}
          </Box>
          <Typography
            align="center"
            color="#4943da"
            sx={{ fontWeight: 300, cursor: "pointer" }}
            variant="h5"
            component="div"
            fontSize={"14px"}
          >
            Show more
          </Typography>
          <Gap height="25px" />
          <Typography
            sx={{ opacity: 0.7, fontWeight: 600, letterSpacing: "1px" }}
            fontSize={"13px"}
            variant="h5"
            component="div"
          >
            Minimum Experience
          </Typography>
          <Typography
            sx={{ fontWeight: 300 }}
            variant="h5"
            component="div"
            fontSize={"14px"}
          >
            {job.minExp || 0} years
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ padding: 0 }}>
        <Button
          focusRipple={false}
          sx={{
            ":hover": { bgcolor: "var(--easy-apply-color)" },
            bgcolor: "var(--easy-apply-color)",

            width: "100%",
            borderRadius: "8px",
          }}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={"⚡"}
        >
          <a
            style={{ textDecoration: "none", color: "black" }}
            href={job.applyLink}
            target="_blank"
          >
            Easy Apply
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

JobCard.propTypes = {
  job: PropTypes.object,
};
export default JobCard;
