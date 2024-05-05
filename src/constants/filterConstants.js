const roleOptions = [
  {
    label: "Engineering",
    options: [
      { label: "Frontend", value: "frontend" },
      { label: "Backtend", value: "backend" },
      { label: "Fullstack", value: "fullstack" },
      { label: "ISO", value: "ios" },
      { label: "Flutter", value: "flutter" },
      { label: "React Native", value: "react native" },
      { label: "DevOps", value: "devops" },
      { label: "Android", value: "android" },
      { label: "Tech Lead", value: "ltch lead" },
      { label: "Date Science", value: "date science" },
      { label: "Data Engineer", value: "data engineer" },
      { label: "Nlp", value: "nlp" },
    ],
  },

  {
    label: "Designer",
    options: [
      { label: "Graphic Designer", value: "graphic designer" },
      { label: "Product Designer", value: "product designer" },
    ],
  },
  {
    label: "Product",
    options: [{ label: "Product Manager", value: "product manager" }],
  },
];

const NumberOfEmployeesOptions = [
  { label: "1 - 10", value: "1 - 10" },
  { label: "11 - 20", value: "11 - 20" },
  { label: "21 - 50", value: "21 - 50" },
  { label: "51 - 100", value: "51 - 100" },
  { label: "101 - 200", value: "101 - 200" },
  { label: "500+", value: "500+" },
];

const experienceOptions = Array.from({ length: 10 }, (_, index) => ({
  label: `${index}`,
  value: `${index}`,
}));

const JobTypeOptions = [
  { label: "Remote", value: "remote" },
  { label: "Hybrid", value: "hybrid" },
  { label: "In office", value: "in office" },
];

const techStackoptions = [
  { label: "JavaScript", value: "javaScript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C++", value: "c++" },
  { label: "Ruby", value: "ruby" },
  { label: "Swift", value: "swift" },
  { label: "Go", value: "go" },
  { label: "TypeScript", value: "typeScript" },
  { label: "PHP", value: "php" },
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "React", value: "react" },
  { label: "Angular", value: "angular" },
  { label: "Vue.js", value: "vue.js" },
  { label: "Node.js", value: "node.js" },
  { label: "SQL", value: "sql" },
  { label: "MongoDB", value: "mongodb" },
  { label: "AWS", value: "aws" },
  { label: "Docker", value: "docker" },
  { label: "Kubernetes", value: "kubernetes" },
];

const basePayOptions = Array.from({ length: 7 }, (_, index) => ({
  label: `${index}L`,
  value: `${index}L`,
}));

const rolesQueryKey = "role";
const numberofEmpQueryKey = "numberOfEmp";
const minExpQueryKey = "minExp";
const jobTypeQueryKey = "location";
const techStackQueryKey = "techStack";
const basePayQueryKey = "minSalary";
const companyNameQueryKey = "companyName";

export {
  rolesQueryKey,
  numberofEmpQueryKey,
  minExpQueryKey,
  jobTypeQueryKey,
  techStackQueryKey,
  basePayQueryKey,
  companyNameQueryKey,
  experienceOptions,
  roleOptions,
  NumberOfEmployeesOptions,
  JobTypeOptions,
  techStackoptions,
  basePayOptions,
};
