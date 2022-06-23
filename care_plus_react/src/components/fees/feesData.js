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

export const clinicColumns = [
  {
    headerName: "S.No",
    valueGetter: "node.rowIndex + 1",
    width: "70px",
  },
  {
    field: "id",
    headerName: "ID",
    filter: true,
    filterParams: filterTextParams,
    width: "70px",
  },
  {
    field: "name",
    headerName: "Name",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "fees",
    headerName: "Fees",
    filter: true,
    filterParams: filterTextParams,
    width: "80px",
  },
  {
    field: "validFor",
    headerName: "Valid For",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    filter: true,
    filterParams: filterTextParams,
  },
];

export const clinicRows = [
  {
    id: "25",
    name: "Jon",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "885",
    name: "Cersei",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "78",
    name: "Jaime",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "23",
    name: "Arya",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "55",
    name: "Daenerys",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "66",
    name: "Hommie",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "77",
    name: "Ferrara",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "88",
    name: "Rossini",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "44",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "78",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "79",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "29",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
];
export const doctorColumns = [
  {
    field: "id",
    headerName: "ID",
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
    field: "fees",
    headerName: "Fees",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "validFor",
    headerName: "Valid For",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "clinic",
    headerName: "Clinic",
    filter: true,
    filterParams: filterTextParams,
  },
];

export const doctorRows = [
  {
    id: "25",
    name: "Adren",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "885",
    name: "Putin",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "78",
    name: "Raees",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "23",
    name: "Bairstow",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "55",
    name: "Daenerys",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "66",
    name: "Hommie",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "77",
    name: "Ferrara",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "88",
    name: "Rossini",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "44",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "78",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "79",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
  {
    id: "29",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
    clinic: "Tripmax",
  },
];

const data = [
  {
    rows: clinicRows,
    columns: clinicColumns,
  },
  {
    rows: doctorRows,
    columns: doctorColumns,
  },
];

export default data;
