import "./Contact.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";

interface Form {
  email: string;
  message: string;
}

const defaultValues = {
  email: "",
  message: "",
};

const ContactPage = () => {
  const { handleSubmit, control, reset } = useForm<Form>({ defaultValues });

  const submit = async (value: Form) => {
    const body = {
      ...value,
      access_key: "eadfea7c-a6e6-4b5f-90ac-cd4d2e96429e",
    };
    const res = await axios.post("https://api.web3forms.com/submit", body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if ([200, 201].includes(res.status)) {
      reset();
    }
  };

  return (
    <div className="container-contact">
      <div className="wrap-container-contact">
        <h1>Contact</h1>
        <div className="line"></div>
        <div className="container-contact-input">
          <form onSubmit={handleSubmit(submit)}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => {
                return (
                  <div className="email">
                    <h2>Email:</h2>
                    <input
                      {...field}
                      type="email"
                      placeholder="Email..."
                      name="email"
                      required
                    />
                  </div>
                );
              }}
            />
            <Controller
              control={control}
              name="message"
              render={({ field }) => {
                return (
                  <div className="contact">
                    <textarea
                      {...field}
                      placeholder="Enter text here..."
                      required
                    />
                  </div>
                );
              }}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
