import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getAllQueryParamsObject } from "../utils/utils";

const useParamsState = () => {
  const navigate = useNavigate();

  const queryParams = useMemo(() => getAllQueryParamsObject(), []);

  const updateQueryParams = (key, value) => {
    const queryParams = new URLSearchParams(window.location.search);
    if (value && value !== "undefined") queryParams.set(key, value);
    else queryParams.delete(key);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    navigate(newUrl);
  };

  return { queryParams, updateQueryParams };
};

export default useParamsState;
