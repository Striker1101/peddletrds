import React, { useEffect, useState } from "react";
import { getUser } from "../../../Utils/transform";
import { Modal, Button } from "react-bootstrap"; // Using Bootstrap for the modal
import { apiGet } from "../../../Utils/service";
import TraderCard from "./TradersCard";

export default function ChooseTrader() {
  const user = getUser();
  const [showModal, setShowModal] = useState(false);
  const [traders, setTraders] = useState([]);

  useEffect(() => {
    apiGet("/trader").then((res) => {
      setTraders(res.data);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Invest in a Trader</h2>

      <div style={styles.traderInfo}>
        <p>
          <strong>Current Trader:</strong>{" "}
          {user.trader ? user.trader?.name : "None selected"}
        </p>
      </div>

      <Button variant="primary" onClick={() => setShowModal(true)}>
        Choose a Trader
      </Button>

      {/* Modal */}
      <Modal
        style={styles.container}
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Select a Trader</Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.container}>
          {traders.map((item, index) => {
            return <TraderCard key={index} item={item} />;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// Basic inline styles
const styles = {
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px",
    width: "100%",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  traderInfo: {
    marginBottom: "15px",
  },
};
