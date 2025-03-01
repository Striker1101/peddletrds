import React, { useRef, useState } from "react";
import { Clipboard, Check, X } from "lucide-react";
import { Modal } from "react-bootstrap";
import { apiPost } from "../../../Utils/service";
import { getUser } from "../../../Utils/transform";
import { handleSuccess } from "../../../Components/ToastProvider";
import { toast } from "react-toastify";

export default function CryptoCard({ wallet }) {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const form = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", getUser().id);
    formData.append("wallet_address", wallet.address);
    formData.append("currency", wallet.currency);
    formData.append("amount", amount);

    // Ensure 'image' is a File object
    if (image instanceof File) {
      formData.append("image_url", image);
    } else {
      toast.error("Invalid image format. Ensure it's a File object.");
    }

    const data = {
      user_id: getUser().id,
      wallet_address: wallet.address,
      currency: wallet.currency,
      amount: amount,
      image_url: image,
    };

    console.log(data);

    apiPost("/deposit", formData, { "Content-Type": "multipart/form-data" })
      .then((res) => {
        handleSuccess("Deposit was Successful, Currently Pending");
        form.current.reset();
        toggleModal(); // Close modal after submission
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-gray-900 p-4"
      style={{ backgroundColor: "#212529" }}
    >
      <div
        className="card rounded-2xl shadow-lg p-3 max-w-md w-100"
        style={{ backgroundColor: "#343a40", color: "white" }}
      >
        <h2
          className="text-xl font-semibold mb-4 d-flex align-items-center"
          style={{ color: "#e0e0e0" }}
        >
          Deposit <span className="text-purple-600 ms-2">{wallet.name}</span>
        </h2>
        <div className="mb-4">
          <label
            className="form-label text-sm mb-2"
            style={{ color: "#ced4da" }}
          >
            Deposit Address
          </label>
          <div
            className="input-group rounded-lg overflow-hidden"
            style={{ borderColor: "#495057" }}
          >
            <input
              type="text"
              value={wallet.address}
              readOnly
              className="form-control flex-grow p-2 text-sm bg-gray-800 outline-none border-0"
              style={{ backgroundColor: "#42484f", color: "#adb5bd" }}
            />
            <button
              onClick={handleCopy}
              className="btn text-white hover:bg-purple-700 transition-all"
              style={{
                backgroundColor: "#7B61FF",
                borderColor: "#7B61FF",
                padding: "0.5rem 1rem",
              }}
            >
              {copied ? <Check size={18} /> : <Clipboard size={18} />}
            </button>
          </div>
          {copied && (
            <p
              className="text-success text-xs mt-2"
              style={{ color: "#28a745" }}
            >
              Copied to clipboard!
            </p>
          )}
        </div>
        <button
          className="btn w-100 py-2 rounded-lg font-medium transition-all"
          style={{
            backgroundColor: "#7B61FF",
            borderColor: "#7B61FF",
            color: "white",
          }}
          onClick={toggleModal}
        >
          Upload Proof of Deposit
        </button>
      </div>

      {/* Upload Proof of Deposit Modal */}
      <Modal show={showModal} onHide={toggleModal} centered>
        <Modal.Body
          className="p-4"
          style={{ backgroundColor: "#212529", color: "white" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-white">Upload Proof of Deposit</h4>
            <X size={24} className="cursor-pointer" onClick={toggleModal} />
          </div>

          <form
            ref={form}
            onSubmit={handleSubmit}
            enctype="multipart/form-data"
          >
            {/* Amount */}
            <div className="mb-3">
              <label
                className="form-label text-sm"
                style={{ color: "#ced4da" }}
              >
                Amount
              </label>
              <input
                type="number"
                className="form-control bg-gray-800 text-white border-0"
                style={{ backgroundColor: "#42484f" }}
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            {/* Image Upload */}
            <div className="mb-3">
              <label
                className="form-label text-sm"
                style={{ color: "#ced4da" }}
              >
                Upload Image
              </label>
              <div
                className="d-flex flex-column align-items-center justify-content-center p-4 border border-dashed rounded"
                style={{ backgroundColor: "#42484f", cursor: "pointer" }}
                onClick={() => document.getElementById("imageInput").click()}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="img-fluid rounded"
                    style={{ maxHeight: "150px" }}
                  />
                ) : (
                  <p className="text-muted">Drag & Drop or Click to Upload</p>
                )}
              </div>
              <input
                type="file"
                id="imageInput"
                className="d-none"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-100 py-2 rounded-lg font-medium transition-all"
              style={{
                backgroundColor: "#7B61FF",
                borderColor: "#7B61FF",
                color: "white",
              }}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
