import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getInvoceById } from "../data";

export const InvoceDetails = () => {
  const [invoice, setInvoice] = useState(null);
  const { invocesId } = useParams();
// console.log(useParams())
  useEffect(() => {
    getInvoceById(invocesId).then(setInvoice);
  }, [invocesId]);

  if (!invoice) {
    return null;
  }

  const { recipient, account, total, date } = invoice;

  return (
    <div>
      <p>
        <b>Recipient:</b> {recipient}
      </p>
      <p>
        <b>Account number:</b> ${account}
      </p>
      <p>
        <b>Total due:</b> {total}$
      </p>
      <p>
        <b>Invoice date:</b> {new Date(date.created).toLocaleDateString()}
      </p>
      <p>
        <b>Due date:</b> {new Date(date.due).toLocaleDateString()}
      </p>
    </div>
  );
};
