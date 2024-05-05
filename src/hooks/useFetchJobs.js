import { useCallback, useEffect, useRef, useState } from "react";
import { fetchJobs } from "../gateways/jobGateway";
import { useDispatch, useSelector } from "react-redux";
import { jobsReducer } from "../redux/slices/jobSlice";

const baseJobFetchLimit = 20;
const useFetchJobs = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const jobList = useSelector((state) => state.jobs.value);

  const infiriteScrollTracker = useRef({ offset: 0 });

  const fetchJobList = useCallback(
    async (setLoading = true) => {
      if (setLoading) setIsLoading(true);
      const res = await fetchJobs({
        limit: baseJobFetchLimit,
        offset: infiriteScrollTracker.current.offset,
      });
      dispatch(jobsReducer(res));
      if (setLoading) setIsLoading(false);
    },
    [dispatch]
  );

  useEffect(() => {
    fetchJobList();
  }, [fetchJobList]);

  const fetchMore = () => {
    infiriteScrollTracker.current = {
      offset: infiriteScrollTracker.current.offset + baseJobFetchLimit,
    };
    fetchJobList(false);
  };

  return {
    jobList,
    isLoading,
    fetchMore,
  };
};

export default useFetchJobs;
