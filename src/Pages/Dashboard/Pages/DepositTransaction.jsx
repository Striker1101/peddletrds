import React, { useEffect, useState } from "react";
import { apiDelete, apiGet } from "../../../Utils/service";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

export default function DepositTransaction() {
  const [selectedDeposit, setSelectedDeposit] = useState(null);

  const [deposit, setDeposit] = useState([]);

  useEffect(() => {
    apiGet("/deposit").then((res) => {
      setDeposit(res.data.data);
    });
  }, []);

  console.log(deposit);

  // note => add pagination

  const handleView = (deposit) => {
    setSelectedDeposit(deposit);
  };

  const handleCloseModal = () => {
    setSelectedDeposit(null);
  };

  function handleDelete(id) {
    apiDelete(`/deposit/${id}`)
      .then((res) => {
        toast.success("Deleted Successfully");

        // Remove the deleted item from state
        setDeposit((prevDeposits) =>
          prevDeposits.filter((deposit) => deposit.id !== id)
        );
      })
      .catch((error) => {
        toast.error("Failed to delete");
      });
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
        Deposit Transactions
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Wallet Address</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Proof</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {deposit.map((deposit) => (
              <TableRow key={deposit.id}>
                <TableCell>
                  {Math.floor(Math.random() * 29) + `${deposit.id}`}
                </TableCell>
                <TableCell
                  sx={{
                    maxWidth: 120,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {deposit.wallet_address}
                </TableCell>
                <TableCell>{deposit.currency + " " + deposit.amount}</TableCell>

                <TableCell
                  sx={{
                    color: deposit.status === "pending" ? "orange" : "green",
                    fontWeight: "bold",
                  }}
                >
                  {deposit.status}
                </TableCell>

                <TableCell>
                  <img
                    src={deposit.image_url}
                    alt="proof"
                    width={40}
                    height={40}
                    className="bordered"
                    style={{ borderRadius: 5 }}
                  />
                </TableCell>
                <TableCell>
                  {new Date(deposit.created_at).toDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleView(deposit)}
                    sx={{ marginRight: 1 }}
                  >
                    View
                  </Button>
                  {deposit.status === "pending" && (
                    <Button
                      onClick={() => {
                        handleDelete(deposit.id);
                      }}
                      variant="contained"
                      color="error"
                      size="small"
                    >
                      Delete
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Viewing Details */}
      <Modal open={!!selectedDeposit} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Transaction Details
          </Typography>
          {selectedDeposit && (
            <>
              <Typography>
                <strong>ID:</strong> {selectedDeposit.id}
              </Typography>
              <Typography>
                <strong>User ID:</strong> {selectedDeposit.user_id}
              </Typography>
              <Typography>
                <strong>Wallet Address:</strong>{" "}
                {selectedDeposit.wallet_address}
              </Typography>
              <Typography>
                <strong>Amount:</strong> ${selectedDeposit.amount}
              </Typography>
              <Typography>
                <strong>Currency:</strong> {selectedDeposit.currency}
              </Typography>
              <Typography>
                <strong>Status:</strong> {selectedDeposit.status}
              </Typography>
              <Typography>
                <strong>Added:</strong> {selectedDeposit.added ? "Yes" : "No"}
              </Typography>
              <Typography>
                <strong>Date:</strong> {selectedDeposit.created_at}
              </Typography>
              <Typography sx={{ marginTop: 2 }}>
                <img
                  src={selectedDeposit.image_url}
                  alt="proof"
                  width={100}
                  style={{ borderRadius: 5 }}
                />
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
