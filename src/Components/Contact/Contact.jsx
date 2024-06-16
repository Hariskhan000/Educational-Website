import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "06048aa2-da7b-4eae-9d99-378f799d3105");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            hariskhan873715@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            0316-6208746
          </li>
          <li>
            <img src={location_icon} alt="" /> Near Anas Marriage Hall Khanqah
            Shareef Road Samma Satta
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="">Enter Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="">Enter Your Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phome Number"
            required
          />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message Here"
          ></textarea>
          <button className="btn dark-btn" type="submit">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
