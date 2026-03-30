const db = {
  invoces: [
    {
      id: "172987",
      recipient: "Jacob Mercer",
      account: 20138714,
      total: 8000,
      date: {
        created: "2011-10-05T14:48:00.000Z",
        due: "2011-10-12T00:00:00.000Z",
      },
    },
    {
      id: "123123",
      recipient: "Jacob Mercer",
      account: 20138714,
      total: 8000,
      date: {
        created: "2011-10-05T14:48:00.000Z",
        due: "2011-10-12T00:00:00.000Z",
      },
    },
    {
      id: "234234",
      recipient: "Jacob Mercer",
      account: 20138714,
      total: 8000,
      date: {
        created: "2011-10-05T14:48:00.000Z",
        due: "2011-10-12T00:00:00.000Z",
      },
    },
    {
      id: "12612324",
      recipient: "Jacob Mercer",
      account: 20138714,
      total: 8000,
      date: {
        created: "2011-10-05T14:48:00.000Z",
        due: "2011-10-12T00:00:00.000Z",
      },
    },
    {
      id: "6965453",
      recipient: "Jacob Mercer",
      account: 20138714,
      total: 8000,
      date: {
        created: "2011-10-05T14:48:00.000Z",
        due: "2011-10-12T00:00:00.000Z",
      },
    },
  ],
  customers: [
    { id: 1, name: "Mischa Hopkins" },
    { id: 2, name: "Anis Cresswell" },
    { id: 3, name: "Milla Wagner" },
    { id: 4, name: "Faizan Gillespie" },
    { id: 5, name: "Roy Mays" },
    { id: 6, name: "Leanne Knott" },
    { id: 7, name: "Debbie Fitzgerald" },
    { id: 8, name: "Phebe Reyes" },
    { id: 9, name: "Lola-Mae Kouma" },
    { id: 10, name: "Krish Marsh" },
    { id: 11, name: "Sienna Rodgers" },
    { id: 12, name: "Harper-Rose Schroeder" },
    { id: 13, name: "Pippa Gill" },
    { id: 14, name: "Effie Shaffer" },
    { id: 15, name: "Eshal Nixon" },
    { id: 16, name: "Phyllis Dunlop" },
    { id: 17, name: "Efe Valenzuela" },
    { id: 18, name: "Roman Mcleod" },
    { id: 19, name: "Mikayla Ibarra" },
    { id: 20, name: "Fatma Yu" },
  ],
};

export const getInvoces = () => {
  return Promise.resolve(db.invoces);
};

export const getInvoceById = (invoceId) => {
  return Promise.resolve(db.invoces.find((invoce) => invoce.id === invoceId));
};

export const getCustomers = () => {
  return Promise.resolve(db.customers);
};

export const getCustomerById = (customersId) => {
  // console.log(customersId)
  return Promise.resolve(db.customers.find(customer => customer.id === customersId));
};
