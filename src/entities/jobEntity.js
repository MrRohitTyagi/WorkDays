import { startcase } from "../utils/utils";
class Job {
  constructor(data) {
    this.companyName = data.companyName;
    this.applyLink = data.jdLink;
    this.jobId = data.jdUid;
    this.description = data.jobDetailsFromCompany;
    this.role = startcase(data.jobRole);
    this.location = startcase(data.location);
    this.logoUrl = data.logoUrl;
    this.maxExp = data.maxExp;
    this.maxSalary = data.maxJdSalary;
    this.minExp = data.minExp;
    this.minSalary = data.minJdSalary;
    this.salaryCurrencyCode = data.salaryCurrencyCode;
  }
}
export default Job;
