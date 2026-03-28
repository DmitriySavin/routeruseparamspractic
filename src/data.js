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
};

export const getInvoces = () => {
  return Promise.resolve(db.invoces);
};

export const getInvoceById = (invoceId) => {
  return Promise.resolve(db.invoces.find((invoce) => invoce.id === invoceId));
};
