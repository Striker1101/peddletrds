import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Camera, Save, XCircle } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { apiPatch } from "../../../Utils/service";
import { getUser } from "../../../Utils/transform";
import { handleError, handleSuccess } from "../../../Components/ToastProvider";

export default function ProfilePage() {
  const prevUser = getUser();
  const [user, setUser] = useState({
    avatar: prevUser?.image_url || "https://via.placeholder.com/150",
    name: prevUser?.name || "",
    email: prevUser?.email || "",
    phone_number: prevUser?.phone_number || "",
    street: prevUser?.street || "",
    city: prevUser?.city || "",
    state: prevUser?.state || "",
    zip_code: prevUser?.zip_code || "",
    country: prevUser?.country || "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser({ ...user, avatar: reader.result });
      };
      reader.readAsDataURL(file);
      setFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
    Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });
    if (file) {
      formData.append("avatar", file);
    }
    try {
      const response = await apiPatch(`/user/${prevUser.id}`, formData, {
        "Content-Type": "multipart/form-data",
      });
      console.log("Updated Profile Response:", response);
      handleSuccess("Updated Profile Response:");
    } catch (error) {
      handleError("Update Error:");
    }
  };
  // console.log(prevUser);
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        className="shadow-lg p-4 w-100 rounded-4"
        style={{ maxWidth: "700px" }}
      >
        <h2 className="text-center mb-4 fw-bold">Edit Profile</h2>

        <Form onSubmit={handleSubmit} enctype="multipart/form-data">
          <div className="text-center mb-4">
            <div
              {...getRootProps()}
              className="position-relative d-inline-block cursor-pointer border rounded-circle overflow-hidden shadow"
              style={{ width: "150px", height: "150px" }}
            >
              <input {...getInputProps()} />
              <img
                src={user.avatar}
                alt="Profile"
                className="w-100 h-100 object-fit-cover"
              />
              <div className="position-absolute bottom-0 end-0 bg-primary p-2 rounded-circle text-white shadow">
                <Camera size={22} />
              </div>
            </div>
            <p className="mt-2 small text-muted">
              Click or Drag & Drop to Update
            </p>
          </div>

          <Row className="g-3">
            {[
              "name",
              "email",
              "phone_number",
              "country",
              "street",
              "city",
              "state",
              "zip_code",
            ].map((field, index) => (
              <Col md={6} key={index}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    {field.replace("_", " ").toUpperCase()}
                  </Form.Label>
                  <Form.Control
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={user[field]}
                    onChange={handleChange}
                    className="py-2"
                  />
                </Form.Group>
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" className="fw-semibold px-4">
              <XCircle size={20} className="me-2" /> Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="fw-semibold px-4"
            >
              <Save size={20} className="me-2" /> Save Changes
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
