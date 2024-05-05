// Library Imports
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// MUI Imports
import { Box, InputBase } from "@mui/material";

// Other Imports
import SelectComp from "@/components/core/Select/index.jsx";
import {
  JobTypeOptions,
  NumberOfEmployeesOptions,
  basePayOptions,
  experienceOptions,
  roleOptions,
  techStackoptions,
} from "@/constants/filterConstants";
import useParamsState from "@/hooks/useParamsState";
import {
  basePayQueryKey,
  companyNameQueryKey,
  jobTypeQueryKey,
  minExpQueryKey,
  numberofEmpQueryKey,
  rolesQueryKey,
  techStackQueryKey,
} from "@/constants/filterConstants";
import { updateListing } from "@/redux/slices/jobSlice";

import "./filterSection.css";

const FilterSection = () => {
  const [role, setRoles] = useState([]);
  const [numberOfEmp, setNumberOfEmp] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [basePay, setBasePay] = useState("");
  const [companyName, setCompanyName] = useState("");
  const timeoutRef = useRef();

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
      clearTimeout(timeoutRef.current);
      // debouncing
      timeoutRef.current = setTimeout(() => {
        updateQueryParams(key, encodeURIComponent(value));
        dispatch(updateListing());
      }, 400);
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
    <Box className="filter-container">
      {/* Roles Select*/}

      <SelectComp
        explicitOptions={explicitOptions}
        name="roles"
        placeholder="Roles"
        isMulti={true}
        onChange={handleRoleChange}
        options={roleOptions}
        value={role}
      />

      {/* No of employees Select*/}

      <SelectComp
        name="Number Of Employees"
        placeholder="Number Of Employees"
        onChange={handleNumberOfEmpOnchange}
        options={NumberOfEmployeesOptions}
        value={numberOfEmp}
      />

      {/* Experience Select*/}

      <SelectComp
        placeholder="Min Experience"
        name="min-experience"
        onChange={handleExperienceOnchange}
        options={experienceOptions}
        value={experience}
      />

      {/* Job Type Select*/}

      <SelectComp
        placeholder="Remote"
        name="remote"
        onChange={handleJobTypeOnchange}
        options={JobTypeOptions}
        value={jobType}
      />

      {/* Tech Stack Select*/}

      <SelectComp
        placeholder="Tech Stack "
        name="tech-stack "
        isMulti={true}
        onChange={handleTechStackOnchange}
        options={techStackoptions}
        value={techStack}
      />

      {/* Minimum base pay salary  Select*/}

      <SelectComp
        name="minimum-base-pay-salary"
        placeholder="Minimum Salary"
        onChange={handleBasePayOnchange}
        options={basePayOptions}
        value={basePay}
      />

      {/* Search company Name  Select*/}

      <InputBase
        size="small"
        sx={{
          "::placeholder": { fontSize: "12px" },
          "& > input": { paddingTop: "2px" },
          border: "1px solid hsl(0, 0%, 80%)",
          padding: "4px",
          height: "38px",
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
    </Box>
  );
};

export default FilterSection;
