import { getCustomerById, getCustomers } from "../data";
import { useEffect, useMemo, useState } from "react";
import { SearchBox } from "../components/SearchBox";
import { useSearchParams , Link, useLocation } from "react-router-dom";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
const location = useLocation()

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = (value) => {
    console.log(value);
    setSearchParams(value != "" ? { filter: value } : {});
  };

  const filterParam = searchParams.get("filter") ?? "";
  console.log(filterParam);


  const visibleCustomers = useMemo(() => {
    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [customers, filterParam]);

  console.log(visibleCustomers);

 return (
    <div>
      <SearchBox value={filterParam} onChange={changeFilter} />
      {visibleCustomers.length > 0 && (
        <ul>
          {visibleCustomers.map(({ id, name }) => (
            <li key={`${id}`}>
              <Link to={`${id}`} state={{from: location}}>User: {name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Customers;
