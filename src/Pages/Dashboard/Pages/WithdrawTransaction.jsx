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

export default function WithdrawTransaction() {
  const [selectedDeposit, setSelectedDeposit] = useState(null);

  const [withdraw, setWithdraw] = useState([]);

  useEffect(() => {
    apiGet("/withdraw").then((res) => {
      setWithdraw(res.data.data);
    });
  }, []);

  console.log(withdraw);

  // note => add pagination

  const handleView = (withdraw) => {
    setSelectedDeposit(withdraw);
  };

  const handleCloseModal = () => {
    setSelectedDeposit(null);
  };

  function handleDelete(id) {
    apiDelete(`/withdraw/${id}`)
      .then((res) => {
        toast.success("Deleted Successfully");

        // Remove the deleted item from state
        setWithdraw((prevDeposits) =>
          prevDeposits.filter((withdraw) => withdraw.id !== id)
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
              <TableCell>Name</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {withdraw.map((withdraw) => (
              <TableRow key={withdraw.id}>
                <TableCell>
                  {Math.floor(Math.random() * 29) + `${withdraw.id}`}
                </TableCell>
                <TableCell
                  sx={{
                    maxWidth: 120,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {withdraw.name}
                </TableCell>
                <TableCell>{withdraw.destination}</TableCell>

                <TableCell
                  sx={{
                    color: withdraw.status === 0 ? "orange" : "green",
                    fontWeight: "bold",
                  }}
                >
                  {withdraw.status == 0 ? "Pending" : "Approved"}
                </TableCell>

                <TableCell>{withdraw.amount}</TableCell>
                <TableCell>
                  <img
                    src={withdraw.withdraw_type?.image}
                    alt="proof"
                    width={40}
                    height={40}
                    className="bordered"
                    style={{ borderRadius: 5 }}
                  />
                </TableCell>

                <TableCell>
                  {new Date(withdraw.created_at).toDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleView(withdraw)}
                    sx={{ marginRight: 1 }}
                  >
                    View
                  </Button>
                  {withdraw.status === "pending" && (
                    <Button
                      onClick={() => {
                        handleDelete(withdraw.id);
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
                <strong>Wallet Address:</strong> {selectedDeposit.destination}
              </Typography>
              <Typography>
                <strong>Amount:</strong> {selectedDeposit.withdraw_type.symbol}
                {selectedDeposit.amount}
              </Typography>
              <Typography>
                <strong>Currency:</strong>{" "}
                {selectedDeposit.withdraw_type.currency}
              </Typography>
              <Typography>
                <strong>Status:</strong>{" "}
                {selectedDeposit.status == 0 ? "Pending" : "Approved"}
              </Typography>
              <Typography>
                <strong>Added:</strong> {selectedDeposit.added ? "Yes" : "No"}
              </Typography>
              <Typography>
                <strong>Date:</strong>{" "}
                {new Date(selectedDeposit.created_at).toDateString()}
              </Typography>
              <Typography sx={{ marginTop: 2 }}>
                <img
                  src={selectedDeposit.withdraw_type.image}
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
