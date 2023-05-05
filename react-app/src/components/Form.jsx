import './FormStyles.css';

const Form = () => {
  return (
    <div className="form">
      <form>
        <label> Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label> Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="type your messsage here"
          cols="30"
          rows="10"
        ></textarea>
        <button className="btn">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
