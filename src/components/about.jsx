import { useState } from "react";

const About = () => {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);

  const handleShowName = () => {
    setName("Sergio Inzunza");
    setVisible(true);
  };

  const getMyInfo = () => {
    if (visible) {
      return (
        <div>
          <h1>Sergio Inzunza</h1>
          <h6>sinzunza@sdgku.edu</h6>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
      );
    } else return "";
  };

  return (
    <div className="about-page">
      {getMyInfo()}
      <button onClick={handleShowName}>Click to see my name</button>
    </div>
  );
};

export default About;
