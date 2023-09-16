import { React, useState } from "react";
import AddBtn from "./AddBtn";
import Card from "./Card";
import "../Css/Presentation.css";
const LabReports = () => {
  const [items, setItems] = useState([
    {
      title: "First Item",
      src: "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      body: "Write Something",
    },
    {
      title: "second Item",
      src: "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      body: "Write Something",
    },
    {
      title: "First Item",
      src: "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      body: "Write Something",
    },
    {
      title: "First Item",
      src: "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      body: "Write Something",
    },
    {
      title: "First Item",
      src: "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      body: "Write Something",
    },
    {
      title: "First Item",
      src: "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      body: "Write Something",
    },
  ]);
  return (
    <>
      <p id="hd">Lab Reports</p>
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          imageUrl={item.src}
          body={item.body}
        />
      ))}

      <AddBtn />
    </>
  );
};

export default LabReports;
