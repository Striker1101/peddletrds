import React from "react";
import { Table, Container } from "react-bootstrap";

export default function OnGoingTrade() {
  const tradeData = [
    // {
    //   id: 1,
    //   dateStarted: "2024-02-20",
    //   investment: 5000,
    //   profitLoss: 120,
    //   margin: "10%",
    // },
    // {
    //   id: 2,
    //   dateStarted: "2024-02-21",
    //   investment: 7000,
    //   profitLoss: -50,
    //   margin: "8%",
    // },
    // {
    //   id: 3,
    //   dateStarted: "2024-02-22",
    //   investment: 10000,
    //   profitLoss: 300,
    //   margin: "12%",
    // },
  ];

  return (
    <Container fluid className="" style={{ width: "100%" }}>
      <h5 className="text-center">Ongoing Trades</h5>
      <div className="table-responsive">
        <Table striped bordered hover className="text-center">
          <thead className="bg-light">
            <tr>
              <th>Date Started</th>
              <th>Investment ($)</th>
              <th>Profit/Loss ($)</th>
              <th>Margin</th>
            </tr>
          </thead>
          <tbody>
            {tradeData.length > 0 ? (
              tradeData.map((trade) => (
                <tr key={trade.id}>
                  <td>{trade.dateStarted}</td>
                  <td>{trade.investment.toLocaleString()}</td>
                  <td
                    className={
                      trade.profitLoss >= 0 ? "text-success" : "text-danger"
                    }
                  >
                    {trade.profitLoss.toLocaleString()}
                  </td>
                  <td>{trade.margin}</td>
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
    </Container>
  );
}
