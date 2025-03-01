import React, { useEffect, useState } from "react";
import { Table, Container, Spinner } from "react-bootstrap";
import { handleError } from "../../../Components/ToastProvider";
import { apiGet } from "../../../Utils/service";

export default function OnGoingTrade() {
  const [tradeData, setTradeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet("/invest")
      .then((res) => {
        console.log(res);
        setTradeData(res.data?.investments);
      })
      .catch((err) => {
        console.error("Error fetching investments:", err);
        handleError("Failed to fetch trades. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container fluid style={{ width: "100%" }}>
      <h5 className="text-center">Ongoing Trades</h5>

      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover className="text-center">
            <thead className="bg-light">
              <tr>
                <th>Date Started</th>
                <th>Investment ($)</th>
                <th>Plan</th>
                <th>Duration (Days)</th>
              </tr>
            </thead>
            <tbody>
              {tradeData.length > 0 ? (
                tradeData.map((trade) => (
                  <tr key={trade.id}>
                    <td>{new Date(trade.created_at).toLocaleDateString()}</td>
                    <td>{trade.amount.toLocaleString()}</td>
                    <td className="text-capitalize">{trade.plan}</td>
                    <td>{trade.duration || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    No trades available.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
}
