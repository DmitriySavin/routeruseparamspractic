import { useLocation, useParams , Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCustomerById } from "../data";

const CustomersDetails = () => {
    const [customer, setCustomer] = useState(null);
    const location = useLocation()

    const {customersId} = useParams();
    // console.log(customersId)
    // console.log(Number(customersId))
    
  useEffect(() => {
    getCustomerById(Number(customersId)).then(setCustomer);
  }, [customersId]);

  console.log(customer);
    if (!customer) {
    return null
}
  const { id, name } = customer;

  return (
      <div>
          <Link to={location.state?.from ?? "/customers"}>Back</Link>

      <p>id: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default CustomersDetails;
