let textFilterParams = {
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

const clinicColumns = [
  { field: "id", filter: true, filterParams: textFilterParams },
  { field: "name", filter: true, filterParams: textFilterParams },
  {
    field: "open",
    headerName: "Open Time",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "close",
    headerName: "Close Time",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "officeAddress",
    filter: true,
    filterParams: textFilterParams,
  },
  { field: "doctors" },
];

const clinicRows = [
  {
    id: "25",
    name: "Jon",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "885",
    name: "Cersei",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "78",
    name: "Jaime",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "23",
    name: "Arya",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "55",
    name: "Daenerys",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "66",
    name: "Hommie",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "77",
    name: "Ferrara",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "88",
    name: "Rossini",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "44",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "78",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "79",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: "29",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
];
const doctorColumns = [
  {
    field: "id",
    headerName: "ID",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "firstName",
    headerName: "First Name",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "address",
    headerName: "Address",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "clinic",
    headerName: "Clinic",
    filter: true,
    filterParams: textFilterParams,
  },
];

const doctorRows = [
  {
    id: "44",
    firstName: "Jon",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "990",
    firstName: "Cersei",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "224",
    firstName: "Jaime",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "334",
    firstName: "Arya",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "440",
    firstName: "Daenerys",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "370",
    firstName: "Hommie",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "284",
    firstName: "Ferrara",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "775",
    firstName: "Rossini",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "980",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "354",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "79",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
  {
    id: "29",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    clinic: "Bhatnagar",
  },
];
const userColumns = [
  {
    field: "id",
    headerName: "ID",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "firstName",
    headerName: "First Name",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "address",
    headerName: "Address",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "appointmentDate",
    headerName: "Appointment Date",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "doctor",
    headerName: "Doctor",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "clinic",
    headerName: "Clinic",
    filter: true,
    filterParams: textFilterParams,
  },
];

const userRows = [
  {
    id: "154",
    firstName: "ALbert",
    lastName: "Helski",
    address: "Sopore, Sagipora",
    appointmentDate: "23-June-2023",
    doctor: "Alaxnder",
    clinic: "Summer Hall",
  },
  {
    id: "990",
    firstName: "Cersei",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "224",
    firstName: "Jaime",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "334",
    firstName: "Arya",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "440",
    firstName: "Daenerys",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "370",
    firstName: "Hommie",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "284",
    firstName: "Ferrara",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "775",
    firstName: "Rossini",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "980",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "354",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "79",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "29",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
];

const appointmentColumns = [
  {
    field: "id",
    headerName: "ID",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "firstName",
    headerName: "First Name",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "address",
    headerName: "Address",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "appointmentDate",
    headerName: "Appointment Date",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "doctor",
    headerName: "Doctor",
    filter: true,
    filterParams: textFilterParams,
  },
  {
    field: "clinic",
    headerName: "Clinic",
    filter: true,
    filterParams: textFilterParams,
  },
];

const appointmentRows = [
  {
    id: "154",
    firstName: "ALbert",
    lastName: "Helski",
    address: "Sopore, Sagipora",
    appointmentDate: "23-June-2023",
    doctor: "Alaxnder",
    clinic: "Summer Hall",
  },
  {
    id: "990",
    firstName: "Cersei",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "224",
    firstName: "Jaime",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "334",
    firstName: "Arya",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "440",
    firstName: "Daenerys",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "370",
    firstName: "Hommie",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "284",
    firstName: "Ferrara",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "775",
    firstName: "Rossini",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "980",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "354",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "79",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: "29",
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
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
  {
    rows: userRows,
    columns: userColumns,
  },
  {
    rows: appointmentRows,
    columns: appointmentColumns,
  },
];

export default data;

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "This Year",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const optionsData = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: [100, 200, 300, 1000, 1500, 500, 700],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
  ],
};
