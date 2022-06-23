let filterTextParams = {
  filterOptions: ["contains", "notContains"],
  textFormatter: (r) => {
    if (r == null) return null;
    return r
      .toLowerCase()
      .replace(/[àáâãäå]/g, "a")
      .replace(/æ/g, "ae")
      .replace(/ç/g, "c")
      .replace(/[èéêë]/g, "e")
      .replace(/[ìíîï]/g, "i")
      .replace(/ñ/g, "n")
      .replace(/[òóôõö]/g, "o")
      .replace(/œ/g, "oe")
      .replace(/[ùúûü]/g, "u")
      .replace(/[ýÿ]/g, "y");
  },
  debounceMs: 200,
  suppressAndOrCondition: true,
};

export const columns = [
  {
    headerName: "S.No",
    valueGetter: "node.rowIndex + 1",
    width: "70px",
  },
  {
    field: "id",
    headerName: "ID",
    width: "70px",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "name",
    headerName: "Name",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "open",
    headerName: "Open Time",
    width: "150px",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "close",
    headerName: "Close Time",
    width: "150px",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "description",
    headerName: "Description",
  },
  {
    field: "contact",
    headerName: "Contact Details",
  },
  {
    field: "officeAddress",
    headerName: "Office Address",
  },
];

export const rows = [
  {
    id: "25",
    name: "Jon",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "885",
    name: "Cersei",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "78",
    name: "Jaime",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "23",
    name: "Arya",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "55",
    name: "Daenerys",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "66",
    name: "Hommie",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "77",
    name: "Ferrara",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "88",
    name: "Rossini",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "44",
    name: "Harvey",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "78",
    name: "Harvey",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "79",
    name: "Harvey",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
  {
    id: "29",
    name: "Harvey",
    open: "09:00:00",
    close: "05:00 PM",
    description: "A heart specilaist clinic based in west coast",
    contact: "9149575307",
    officeAddress: "27 Houston California",
  },
];
