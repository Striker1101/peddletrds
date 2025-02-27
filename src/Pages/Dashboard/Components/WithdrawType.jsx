import React, { useState } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import { getUser } from "../../../Utils/transform";
import { apiPost } from "../../../Utils/service";
import { handleSuccess } from "../../../Components/ToastProvider";

export default function WalletType({ withdraw }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="mb-3 shadow-sm" style={{ width: "fit-content" }}>
        <Card.Body>
          <div className="d-flex align-items-center gap-3">
            <img
              className="bordered border-red"
              width={50}
              height={50}
              src={withdraw.image}
              alt={withdraw.name}
            />

            <div>
              <h5 className="mb-1">
                {withdraw?.type === "bank_transfer"
                  ? withdraw?.name
                  : `${withdraw?.name} (Crypto)`}
              </h5>

              <p className="mb-0 text-muted">
                Limits: {withdraw?.symbol}
                {withdraw?.min_limit} - {withdraw?.symbol}
                {withdraw?.max_limit}
              </p>
            </div>
          </div>

          <Button
            variant="success"
            className="mt-3 w-100"
            onClick={() => setShowModal(true)}
          >
            Withdraw Funds
          </Button>
        </Card.Body>
      </Card>

      {/* Withdraw Modal */}
      <WithdrawModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        withdraw={withdraw}
      />
    </>
  );
}

function WithdrawModal({ show, handleClose, withdraw }) {
  const [formData, setFormData] = useState({
    user_id: getUser().id,
    withdrawal_type_id: withdraw?.id,
    amount: 0,
    name: "",
    routing_number: "",
    destination: "",
    code: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    apiPost("/withdraw", formData).then((res) => {
      setFormData({
        user_id: getUser().id,
        withdrawal_type_id: withdraw?.id,
        amount: 0,
        name: "",
        routing_number: "",
        destination: "",
        code: "",
      });
      handleSuccess("Withdraw is Successful and Pending");
      handleClose();
    });
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Withdraw Funds</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </Form.Group>

          {withdraw?.type === "crypto" ? (
            <Form.Group className="mb-2">
              <Form.Label>Wallet Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter withdraw address"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              />
            </Form.Group>
          ) : (
            <>
              <Form.Group className="mb-2">
                <Form.Label>Account Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter account name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Account number"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Routing Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter routing number"
                  name="routing_number"
                  value={formData.routing_number}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Swift Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter code "
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}

          <Button type="submit" variant="primary" className="w-100">
            Confirm Withdrawal
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
