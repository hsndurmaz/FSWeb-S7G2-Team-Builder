import React from "react";
import { useState } from "react";
function Form() {
  const [formData, setFormData] = useState({
    name: "aaa",
    old: "111",
    major: "bbb",
  });
  const submitFn = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitFn}>
      <label htmlFor="isim">Name:</label>

      <input type="text" name="isim" value={formData.name} />
      <br />
      <label htmlFor="yaş">Old:</label>

      <input type="number" name="yaş" value={formData.old} />
      <br />
      <label htmlFor="bölüm">Major:</label>

      <input type="text" name="Major" value={formData.major} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
