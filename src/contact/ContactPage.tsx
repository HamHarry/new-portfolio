import "./Contact.css";

const ContactPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "eadfea7c-a6e6-4b5f-90ac-cd4d2e96429e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="container-contact">
      <div className="wrap-container-contact">
        <h1>Contact</h1>
        <div className="line"></div>
        <div className="container-contact-input">
          <form onSubmit={onSubmit}>
            <div className="email">
              <h2>Email:</h2>
              <input
                type="email"
                placeholder="Email..."
                name="email"
                required
              />
            </div>
            <div className="contact">
              <textarea
                placeholder="Enter text here..."
                name="message"
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
