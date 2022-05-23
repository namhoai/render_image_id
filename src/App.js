import React, { useState } from "react";
import "./App.css";
import Frame from "./Frame";
import { image_to_base64, saveBase64AsFile } from "./helper";

function App() {
  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [image, setImage] = useState("");

  const stageRef = React.useRef(null);

  const onUploadImageBase64 = async ({ currentTarget }) => {
    const file = currentTarget?.files && currentTarget.files[0];
    let fileBase64;
    if (file) {
      fileBase64 = await image_to_base64(file);
      setImage(`${fileBase64}`);
    }
  };

  const onSave = () => {
    const uri = stageRef.current.toDataURL();
    saveBase64AsFile(uri, `${fistName}_${lastName}.png`)
  };

  const onReset = () => {
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setImage('');
  };

  return (
    <div className="App">
      <header className="app-frame">
        <div className="app-left">
          <from>
            <div className="box">
              <div>First Name: &nbsp;</div>
              <input onChange={(e) => setFirstName(e.target.value)} value={fistName} className="input-box" name="fist-name" />
            </div>
            <div className="box">
              <div>Last Name: &nbsp;</div>
              <input onChange={(e) => setLastName(e.target.value)} value={lastName} className="input-box" name="last-name" />
            </div>
            <div className="box">
              <div>date of birth: &nbsp;</div>
              <input type={'date'} onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} className="input-box" name="date-of-birth" />
            </div>
            <div className="box">
              <div>image: &nbsp;</div>
              <input style={{width: 90}} type={'file'} onChange={onUploadImageBase64} className="input-box" name="image" />
            </div>
            <br />
            <br />
            <button onClick={onSave} type="submit">
                {" "}
                Save{" "}
              </button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={onReset}> Reset </button>
          </from>
        </div>

        <div className="app-right">
          <Frame
            stageRef={stageRef}
            fistName={fistName}
            lastName={lastName}
            dateOfBirth={dateOfBirth}
            imageBase64={image}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
