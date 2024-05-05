import { Grid, InputBase } from "@mui/material";
import SelectComp from "@/components/core/Select/index.jsx";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  JobTypeOptions,
  NumberOfEmployeesOptions,
  basePayOptions,
  experienceOptions,
  roleOptions,
  techStackoptions,
} from "@/constants/filterConstants";
import useParamsState from "../../hooks/useParamsState";
import {
  basePayQueryKey,
  companyNameQueryKey,
  jobTypeQueryKey,
  minExpQueryKey,
  numberofEmpQueryKey,
  rolesQueryKey,
  techStackQueryKey,
} from "../../constants/filterConstants";
import { useDispatch } from "react-redux";
import { updateListing } from "../../redux/slices/jobSlice";

const FilterSection = () => {
  const [role, setRoles] = useState([]);
  const [numberOfEmp, setNumberOfEmp] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [basePay, setBasePay] = useState("");
  const [companyName, setCompanyName] = useState("");

  const dispatch = useDispatch();
  const { queryParams, updateQueryParams } = useParamsState();

  useEffect(() => {
    // Set the initial values to the filters based on queryparams
    if (queryParams?.[rolesQueryKey])
      setRoles(queryParams?.[rolesQueryKey]?.split(",") || []);
    if (queryParams?.[numberofEmpQueryKey])
      setNumberOfEmp(queryParams?.[numberofEmpQueryKey] || "");
    if (queryParams?.[minExpQueryKey])
      setExperience(queryParams?.[minExpQueryKey] || "");
    if (queryParams?.[jobTypeQueryKey])
      setJobType(queryParams?.[jobTypeQueryKey] || "");
    if (queryParams?.[techStackQueryKey])
      setTechStack(queryParams?.[techStackQueryKey]?.split(",") || "");
    if (queryParams?.[basePayQueryKey])
      setBasePay(queryParams?.[basePayQueryKey] || "");
    if (queryParams?.[companyNameQueryKey])
      setCompanyName(queryParams?.[companyNameQueryKey] || "");
  }, [queryParams]);

  const handleQueryParams = useCallback(
    (key, value) => {
      updateQueryParams(key, encodeURIComponent(value));
      dispatch(updateListing());
    },
    [dispatch, updateQueryParams]
  );

  const handleRoleChange = (data) => {
    // Roles
    handleQueryParams(rolesQueryKey, data);
    setRoles(data);
  };

  const handleNumberOfEmpOnchange = (data) => {
    updateQueryParams(numberofEmpQueryKey, data);
    // No of employees
    setNumberOfEmp(data);
  };

  const handleExperienceOnchange = (data) => {
    // Experience
    updateQueryParams(minExpQueryKey, data);
    setExperience(data);
  };
  const handleBasePayOnchange = (data) => {
    // Minimum base pay salary
    handleQueryParams(basePayQueryKey, data);
    setBasePay(data);
  };

  const handleJobTypeOnchange = (data) => {
    // Job Type
    handleQueryParams(jobTypeQueryKey, data);
    setJobType(data);
  };
  const handleTechStackOnchange = (data) => {
    // Tech Stack
    handleQueryParams(techStackQueryKey, data);
    setTechStack(data);
  };
  const handleCompanyNameOnchange = (e) => {
    // Search company Name
    handleQueryParams(companyNameQueryKey, encodeURIComponent(e.target.value));
    setCompanyName(e.target.value);
  };

  const explicitOptions = useMemo(() => {
    // to make options for each filter similar as Roles filter has groups
    return roleOptions.reduce((acc, it) => {
      if (it.options) {
        acc = [...acc, ...it.options];
        return acc;
      }
    }, []);
  }, []);

  return (
    <Grid container spacing={2} direction="row" justifyContent="start">
      {/* Roles Select*/}
      <Grid item minWidth={200}>
        <SelectComp
          explicitOptions={explicitOptions}
          name="roles"
          placeholder="Roles"
          isMulti={true}
          onChange={handleRoleChange}
          options={roleOptions}
          value={role}
        />
      </Grid>

      {/* No of employees Select*/}
      <Grid item minWidth={200}>
        <SelectComp
          name="Number Of Employees"
          placeholder="Number Of Employees"
          onChange={handleNumberOfEmpOnchange}
          options={NumberOfEmployeesOptions}
          value={numberOfEmp}
        />
      </Grid>

      {/* Experience Select*/}
      <Grid item xs={1} minWidth={200}>
        <SelectComp
          placeholder="Min Experience"
          name="min-experience"
          onChange={handleExperienceOnchange}
          options={experienceOptions}
          value={experience}
        />
      </Grid>

      {/* Job Type Select*/}
      <Grid item minWidth={200}>
        <SelectComp
          placeholder="Remote"
          name="remote"
          onChange={handleJobTypeOnchange}
          options={JobTypeOptions}
          value={jobType}
        />
      </Grid>

      {/* Tech Stack Select*/}
      <Grid item minWidth={200}>
        <SelectComp
          placeholder="Tech Stack "
          name="tech-stack "
          isMulti={true}
          onChange={handleTechStackOnchange}
          options={techStackoptions}
          value={techStack}
        />
      </Grid>

      {/* Minimum base pay salary  Select*/}
      <Grid item minWidth={200}>
        <SelectComp
          name="minimum-base-pay-salary"
          placeholder="Minimum Salary"
          onChange={handleBasePayOnchange}
          options={basePayOptions}
          value={basePay}
        />
      </Grid>

      {/* Search company Name  Select*/}
      <Grid item minWidth={200}>
        <InputBase
          size="small"
          sx={{
            "::placeholder": { fontSize: "12px" },
            "& > input": { paddingTop: "2px" },
            border: "1px solid hsl(0, 0%, 80%)",
            padding: "4px",
            borderRadius: "4px",
          }}
          id="search-company-name"
          label="Search company Name"
          variant="outlined"
          value={companyName}
          onChange={handleCompanyNameOnchange}
          placeholder="Search company Name"
          name="Search company Name"
        />
      </Grid>
    </Grid>
  );
};

export default FilterSection;
