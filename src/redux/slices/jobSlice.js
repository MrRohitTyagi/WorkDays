import { createSlice } from "@reduxjs/toolkit";
import { getAllQueryParamsObject } from "@/utils/utils";

import Job from "@/entities/jobEntity.js";

const initialState = {
  value: [],
  all: [],
};

function filterJobs(jobs = [new Job()]) {
  const filteredJobs = [];
  const {
    companyName = "",
    minSalary = "",
    minExp = "",
    role = "",
    location = "",
  } = getAllQueryParamsObject() || {};
  console.log(
    `%c {companyName, minSalary, minExp, role, location} `,
    "color: orange;border:2px solid cyan",
    { companyName, minSalary, minExp, role, location }
  );

  for (const job of jobs) {
    // minimum experiencs filter
    if (
      minExp &&
      (!Number.isInteger(job.minExp) || job.minExp < parseInt(minExp))
    ) {
      continue;
    }

    //company name filter
    if (
      companyName &&
      !job.companyName.toLowerCase().includes(companyName.toLowerCase())
    ) {
      continue;
    }

    // filter for min salary
    if (
      minSalary &&
      (!Number.isInteger(job.minSalary) ||
        job.minSalary < parseInt(minSalary.slice(0, -1)))
    ) {
      continue;
    }

    // filter for job type
    if (
      location &&
      !job.location.toLowerCase().includes(location.toLowerCase())
    ) {
      continue;
    }

    // filter for Role
    if (role && !role.toLowerCase().includes(job.role.toLowerCase())) {
      continue;
    }

    filteredJobs.push(job);
  }

  return filteredJobs;
}

const jobReducer = createSlice({
  name: "SET-JOBS",
  initialState,
  reducers: {
    jobsReducer: (state, action) => {
      state.value = filterJobs([...state.all, ...action.payload]);
      state.all = [...state.value, ...action.payload];
    },
    updateListing: (state) => {
      console.log("IN UPDATE JOBS", ",IN UPDATE JOBS");
      state.value = filterJobs([...state.all]);
    },
  },
});
export const { jobsReducer, updateListing } = jobReducer.actions;

export default jobReducer.reducer;
