import React from "react";
import { PiBankBold, PiCurrencyBtcBold } from "react-icons/pi";
import { Card } from "react-bootstrap";

export default function WithdrawType({ withdraw }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        {withdraw.type === "bank" ? (
          <div className="d-flex align-items-center">
            <PiBankBold size={30} className="text-primary me-3" />
            <div>
              <h5 className="mb-1">{withdraw.bank_name}</h5>
              <p className="mb-0">
                <strong>Account Name:</strong> {withdraw.account_name}
              </p>
              <p className="mb-0">
                <strong>Account Number:</strong> {withdraw.account_number}
              </p>
              <p className="mb-0">
                <strong>Routing Number:</strong>{" "}
                {withdraw.routing_number || "N/A"}
              </p>
              <p className="mb-0 text-muted">
                Limits: ${withdraw.min_limit} - ${withdraw.max_limit}
              </p>
            </div>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <PiCurrencyBtcBold size={30} className="text-warning me-3" />
            <div>
              <h5 className="mb-1">{withdraw.name} (Crypto)</h5>
              <p className="mb-0">
                <strong>withdraw Address:</strong> {withdraw.withdraw_address}
              </p>
              <p className="mb-0 text-muted">
                Limits: ${withdraw.min_limit} - ${withdraw.max_limit}
              </p>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
