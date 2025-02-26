import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaCopy } from "react-icons/fa";
import { apiPatch } from "../../../Utils/service";
import { getUser } from "../../../Utils/transform";
import { handleSuccess } from "../../../Components/ToastProvider";

export default function TraderCard({ item }) {
  const user = getUser();
  function handleChoose(id) {
    apiPatch(`/user/${user.id}`, { trader_id: id }).then((res) => {
      handleSuccess("Updated Trader Successfully");
    });
  }
  console.log(item);
  return (
    <Card style={styles.card}>
      {/* Pro Trader Badge */}
      <div style={styles.badge}>{item.rating || "Pro Trader"}</div>

      {/* Header Section */}
      <Card.Body>
        <div style={styles.header}>
          {/* Profile Image */}
          <img
            src={item.profile_picture || "https://via.placeholder.com/50"}
            alt={item.name}
            style={styles.profileImage}
          />

          {/* Trader Info */}
          <div>
            <h5 style={styles.name}>{item.name}</h5>
            <p style={styles.role}>
              {item.position || "Senior broker trading personnel"}
            </p>
          </div>

          {/* Copy Button */}
          <Button variant="primary" style={styles.copyButton}>
            <FaCopy /> COPY
          </Button>
        </div>

        {/* Divider */}
        <hr />

        {/* Stats Section */}
        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <p style={styles.statLabel}>ROI</p>
            <p style={styles.statValue}>{"+" + item.ROI + "%" || "450%"}</p>
          </div>
          <div style={styles.statItem}>
            <p style={styles.statLabel}>PnL</p>
            <p style={styles.statValue}>
              {"$" + (item.PnL ? Number(item.PnL).toLocaleString() : "1200")}
            </p>
          </div>
          <div style={styles.statItem}>
            <p style={styles.statLabel}>Investment</p>
            <p style={styles.statValue}>
              {"$" +
                (item.investment
                  ? Number(item.investment).toLocaleString()
                  : "35,200")}
            </p>
          </div>
          {/* Placeholder for Graph */}
          <button
            onClick={() => {
              handleChoose(item.id);
            }}
            style={styles.graphPlaceholder}
          >
            Use
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

// Inline Styles
const styles = {
  card: {
    position: "relative",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "350px",
    marginBottom: "5px",
  },
  badge: {
    position: "absolute",
    top: "10px",
    left: "-10px",
    backgroundColor: "green",
    color: "white",
    padding: "5px 10px",
    fontSize: "12px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  name: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
  role: {
    margin: 0,
    fontSize: "12px",
    color: "gray",
  },
  copyButton: {
    backgroundColor: "#6c63ff",
    border: "none",
    padding: "5px 10px",
    fontSize: "12px",
  },
  statsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  statItem: {
    textAlign: "center",
  },
  statLabel: {
    fontSize: "12px",
    color: "gray",
  },
  statValue: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "green",
  },
  graphPlaceholder: {
    width: "auto",
    height: "30px",
    backgroundColor: "#e0e0ff",
    borderRadius: "5px",
  },
};
