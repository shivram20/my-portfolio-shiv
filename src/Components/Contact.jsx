import { useState } from "react";
import "./Css/contactFeedback.css";
import api from "../api/axios";

function ContactFeedback() {
  const [formType, setFormType] = useState("contact");

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({
    name: "",
    rating: "Excellent",
    feedback: "",
  });

  // CONTACT FORM HENDLER..
  const contactHandler = async (e) => {
    e.preventDefault();

    const { name, email, message } = contact;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await api.post("/contact", contact);
      alert(res.data.message);
      setContact({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  // FEEDBACK FORM HANDLER..
  const feedbackHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/feedback", feedback);
      alert(res.data.message);
      setFeedback({ name: "", rating: "Excellent", feedback: "" });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="cf-container">
      <div className="cf-card">
        {/* LEFT PANEL */}
        <div className="cf-left">
          {formType === "contact" ? (
            <>
              <h2>Have Feedback?</h2>
              <button onClick={() => setFormType("feedback")}>
                FEEDBACK FORM
              </button>
            </>
          ) : (
            <>
              <h2>Need Help?</h2>
              <button onClick={() => setFormType("contact")}>CONTACT US</button>
            </>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="cf-right">
          {formType === "contact" ? (
            <form onSubmit={contactHandler}>
              <h2>Contact Us</h2>

              <input
                type="text"
                placeholder="Your Name"
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                required
              />

              <textarea
                placeholder="Your Message"
                value={contact.message}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                required
              />

              <button type="submit">SEND MESSAGE</button>
            </form>
          ) : (
            <form onSubmit={feedbackHandler}>
              <h2>Feedback</h2>

              <input
                type="text"
                placeholder="Your Name"
                value={feedback.name}
                onChange={(e) =>
                  setFeedback({ ...feedback, name: e.target.value })
                }
                required
              />

              <select
                value={feedback.rating}
                onChange={(e) =>
                  setFeedback({ ...feedback, rating: e.target.value })
                }
              >
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
              </select>

              <textarea
                placeholder="Your Feedback"
                value={feedback.feedback}
                onChange={(e) =>
                  setFeedback({ ...feedback, feedback: e.target.value })
                }
                required
              />

              <button type="submit">SUBMIT FEEDBACK</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactFeedback;
