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
  { field: "serial", headerName: "S.No", width: "70px" },
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
    field: "officeAddress",
    headerName: "Office Address",
  },
];

export const rows = [
  {
    serial: "1",
    id: "25",
    name: "Jon",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "2",
    id: "885",
    name: "Cersei",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "3",
    id: "78",
    name: "Jaime",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "4",
    id: "23",
    name: "Arya",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "5",
    id: "55",
    name: "Daenerys",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "6",
    id: "66",
    name: "Hommie",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "7",
    id: "77",
    name: "Ferrara",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "8",
    id: "88",
    name: "Rossini",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "9",
    id: "44",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "10",
    id: "78",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "11",
    id: "79",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    serial: "12",
    id: "29",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
];
