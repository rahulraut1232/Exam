import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [username, setUsername] = useState("");

  const [list, setList] = useState([]);

  const handleChatChange = (e) => {
    setUsername(e.target.value);
  };

  const Chat = async (user) => {
    if (username == "") {
      alert("Validation fails");
      return;
    }

    let div = document.querySelector(".chat");
    let preValue = div.innerHTML;
    let newValue = document.querySelector("#input").value;

    div.innerHTML = `<h3>${preValue}</h3>` + `<h3>${newValue}</h3>`;

    const url = "http://localhost:4000/add-user";
    const data = {
      username: username,
    };

    // AJAX using AXIOS
    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setUsername("");
  };

  const getUser = async () => {
    const url = "http://localhost:4000/users";
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };

  // LIke Constructor
  useEffect(() => getUser(), []);

  return (
    <div>
      <h4 className="bg-secondary mb-5 text-light p-3 ">
        MyChatApp <h6 className="p-3">by Rahul Raut 071_JH</h6>
      </h4>
      <div className="row">
        <div className=" col-10">
          <input
            className="form-control p-3 form-control-lg mb-1"
            type="text"
            name=""
            id="input"
            value={username}
            onChange={handleChatChange}
            placeholder="Lets Chat here..."
          />
        </div>
        <div className="col-2">
          <input
            className="btn btn-secondary p-3 w-100"
            type="button"
            name=""
            value="Send"
            onClick={Chat}
          />
        </div>
      </div>

      <div className="chat bg-success  m-lg-1 border-4 mb-3"></div>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary fs-4">
          {item.Chat}
        </div>
      ))}
    </div>
  );
}
