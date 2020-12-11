import React, { useState, useMemo } from "react";
import api from "../../services/api";
import imgplaceholder from "../../images/image-file.png";
import "./EventsPage.css";
/*
        title : String,
        description : String,
        price : Number,
        thumbnail : String,
        sport : String,
        date : Date,

    */

const EventsPage = ({ history }) => {
  const [user] = useState(localStorage.getItem("user"));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");

  //Every time the thumnail changes I want to refresh the property. Memo is a Hook
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user");
    const eventData = new FormData();

    //We needed to create a form this time was not a JSON this time was a FORM
    eventData.append("thumbnail", thumbnail);
    eventData.append("sport", sport);
    eventData.append("description", description);
    eventData.append("price", price);
    eventData.append("date", date);
    eventData.append("title", title);

    try {
      await api.post("/event", eventData, { headers: { user_id } });
      clear();
      alert("Event Created Successfully");
    } catch (e) {
      alert(e);
    }
  };
  const clear = () => {
    setDescription("");
    setPrice("");
    setSport("");
    setPrice("");
    setTitle("");
    setDate("");
    setThumbnail(null);
  };
  return user ? (
    <div className="events">
      <section className="events__section">
        <h3>Create your own event</h3>
        <form className="create-event" onSubmit={submitHandler}>
          <div className="create-event__left">
            <label>Upload Image:</label>
            <label
              id="thumbnail"
              style={{ backgroundImage: `url(${preview})` }}
            >
              <input
                className="create-event__img"
                required
                type="file"
                onChange={(evt) => setThumbnail(evt.target.files[0])}
              />
              <img
                className="create-event__placeholder"
                src={imgplaceholder}
                alt="Insert Event Ilustration"
                style={{ visibility: `${!thumbnail ? "visible" : "hidden"}` }}
              />
            </label>
          </div>
          <div className="create-event__right">
            <label>Sport:</label>
            <input
              className="create-event__input"
              required
              type="text"
              value={sport}
              placeholder="Sport Name"
              id="sport"
              onChange={(evt) => setSport(evt.target.value)}
            />
            <label>Title:</label>
            <input
              className="create-event__input"
              required
              type="text"
              value={title}
              placeholder="Title"
              id="title"
              onChange={(evt) => setTitle(evt.target.value)}
            />
            <label>Description:</label>
            <input
              className="create-event__input"
              required
              type="text"
              value={description}
              placeholder="Event Description"
              id="description"
              onChange={(evt) => setDescription(evt.target.value)}
            />
            <label>Event Price: </label>
            <input
              className="create-event__input"
              required
              type="text"
              value={price}
              placeholder="Event Price $0.00"
              id="price"
              onChange={(evt) => setPrice(evt.target.value)}
            />
            <label>Event Date: </label>
            <input
              className="create-event__input"
              required
              type="date"
              value={date}
              id="price"
              onChange={(evt) => setDate(evt.target.value)}
            />
            <button className="btn primary" type="Submit">
              Create Event
            </button>
          </div>
        </form>
      </section>
    </div>
  ) : (
    <div className="events">
      <section className="events__section">
        <h1>You are not Logged In please Log In or Register</h1>
        <button className="btn primary" onClick={() => history.push("/login")}>
          Log In
        </button>
        <button
          className="btn secondary"
          onClick={() => history.push("/register")}
        >
          Register
        </button>
      </section>
    </div>
  );
};
export default EventsPage;
