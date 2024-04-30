import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Textarea from "./components/Textarea";

export default function App() {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    contact: "",
    consent: false
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
}

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <Input type={"text"} name={"name"} required={"required"} value={formData.name} formData={formData} setFormData={setFormData}/>
          </label>
          <label>
            Address
            <Input type={"text"} name={"address"} value={formData.address} formData={formData} setFormData={setFormData}/>
          </label>
          <label>
            Phone Number
            <Input type={"tel"} name={"phone"} value={formData.phone} formData={formData} setFormData={setFormData}/>
          </label>

          <label>
            Email
            <Input type={"email"} name={"email"} value={formData.email} formData={formData} setFormData={setFormData}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <Textarea value={formData.complaint} formData={formData} setFormData={setFormData}/>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
            <Input type={"radio"} name={"contact"} value={"phone"} formData={formData} setFormData={setFormData}/>
              Phone
            </label>

            <label>
            <Input type={"radio"} name={"contact"} value={"email"} formData={formData} setFormData={setFormData}/>
              Email
            </label>

            <label>
            <Input type={"radio"} name={"contact"} value={"post"} formData={formData} setFormData={setFormData}/>
              Slow Mail
            </label>

            <label>
            <Input type={"radio"} name={"contact"} value={"none"} formData={formData} setFormData={setFormData}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <Input type={"checkbox"} name={"consent"}id={"consent"} checked={formData.consent} formData={formData} setFormData={setFormData}/>
          </label>
        </div>
        <Input type={"submit"} value={"Submit!"} formData={formData} setFormData={setFormData}/>
      </form>
    </>
  );
}