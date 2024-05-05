import axios from "axios";
import Job from "../entities/jobEntity";

export async function fetchJobs(params) {
  try {
    const { data } = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      params
    );
    return data.jdList.map((e) => new Job(e));
  } catch (error) {
    console.log("error", error);
    return [];
  }
}
