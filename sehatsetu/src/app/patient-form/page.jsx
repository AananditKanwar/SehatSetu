"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const departments = [
  "General Medicine",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "Psychiatry",
  "Emergency Medicine",
];

export default function PatientFormPage() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contact: "",
    symptoms: "",
    department: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }
    const userData = JSON.parse(storedUser);
    setUser(userData);
    setFormData((prev) => ({
      ...prev,
      email: userData.email,
    }));
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (
      !formData.fullName ||
      !formData.dob ||
      !formData.gender ||
      !formData.contact ||
      !formData.symptoms ||
      !formData.department
    ) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          ...formData,
          userId: user?.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to submit form");
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <div style={{ textAlign: "center", padding: "2rem", color: "#6b7280" }}>Loading...</div>;
  }

  if (submitted) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
      }}>
        <div className="card" style={{ textAlign: "center", maxWidth: "400px" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
          <h1 style={{ color: "#10b981", marginBottom: "0.5rem", fontSize: "1.75rem" }}>Success!</h1>
          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
            Your patient information has been submitted successfully. Redirecting to dashboard...
          </p>
          <div style={{
            width: "40px",
            height: "40px",
            border: "3px solid #e5e7eb",
            borderTop: "3px solid #10b981",
            borderRadius: "50%",
            margin: "0 auto",
            animation: "spin 1s linear infinite"
          }}></div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      padding: "2rem 1.5rem",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
    }}>
      <div className="container" style={{ maxWidth: "700px" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem", animation: "fadeIn 0.5s ease-out" }}>
          <button
            onClick={() => router.push("/dashboard")}
            style={{
              background: "none",
              border: "none",
              color: "#6366f1",
              fontSize: "1rem",
              marginBottom: "1rem",
              cursor: "pointer",
              fontWeight: 600
            }}
          >
            ← Back to Dashboard
          </button>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Patient Information Form</h1>
          <p style={{ color: "#6b7280", fontSize: "1.05rem" }}>
            Complete your medical details to get started
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="alert alert-error" style={{ marginBottom: "1.5rem" }}>
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="card" style={{ padding: "2rem" }}>
          {/* Full Name */}
          <div className="form-group" style={{ marginBottom: "2rem" }}>
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              style={{ marginTop: "0.5rem" }}
            />
          </div>

          {/* Email (Read-only) */}
          <div className="form-group" style={{ marginBottom: "2rem" }}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={user.email}
              disabled
              style={{ marginTop: "0.5rem", backgroundColor: "#f3f4f6", cursor: "not-allowed" }}
            />
          </div>

          {/* Two Column Layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
            {/* Date of Birth */}
            <div className="form-group">
              <label htmlFor="dob">Date of Birth *</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                style={{ marginTop: "0.5rem" }}
              />
            </div>

            {/* Gender */}
            <div className="form-group">
              <label htmlFor="gender">Gender *</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                style={{ marginTop: "0.5rem" }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Contact Number */}
          <div className="form-group" style={{ marginBottom: "2rem" }}>
            <label htmlFor="contact">Contact Number *</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="10-digit phone number"
              style={{ marginTop: "0.5rem" }}
            />
          </div>

          {/* Department */}
          <div className="form-group" style={{ marginBottom: "2rem" }}>
            <label htmlFor="department">Select Department *</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              style={{ marginTop: "0.5rem" }}
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Symptoms */}
          <div className="form-group" style={{ marginBottom: "2rem" }}>
            <label htmlFor="symptoms">Describe Your Symptoms *</label>
            <textarea
              id="symptoms"
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              required
              placeholder="Please describe your symptoms in detail..."
              style={{ marginTop: "0.5rem", minHeight: "150px" }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: "100%", fontSize: "1rem", padding: "1rem" }}
          >
            {loading ? "Submitting..." : "Submit Information"}
          </button>
        </form>

        {/* Info Box */}
        <div style={{
          marginTop: "2rem",
          padding: "1.5rem",
          background: "#dbeafe",
          border: "1px solid #93c5fd",
          borderRadius: "0.5rem",
          color: "#1e40af"
        }}>
          <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem", fontWeight: 600 }}>ℹ️ Information</p>
          <p style={{ fontSize: "0.9rem", marginBottom: "0" }}>
            Your information is securely stored and will be used to match you with the best healthcare provider.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 640px) {
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
