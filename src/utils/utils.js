export function startcase(str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// responsible for updating,deleting  queryparams
export function getAllQueryParamsObject(url = null) {
  const params = {};
  const searchParams = new URLSearchParams(url || window.location.search);
  for (const [key, value = ""] of searchParams.entries()) {
    params[key] = decodeURIComponent(value);
  }
  return params;
}
