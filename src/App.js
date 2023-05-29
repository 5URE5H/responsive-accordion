import { useEffect, useRef, useState } from "react";
import { Accordions } from "./components/Accordions";
import { Loader } from "./components/Loader";
import "./styles.css";

const accordionsData = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et",
    url: "https://via.placeholder.com/600/92c952",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis",
    url: "https://via.placeholder.com/600/771796",
    body:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum",
    url: "https://via.placeholder.com/600/24f355",
    body:
      "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    url: "https://via.placeholder.com/600/d32776",
    body:
      "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  }
];

export default function App() {
  const [expandedId, setExpandedId] = useState(accordionsData[0].id);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const idChanged = (id) => {
    setExpandedId(id);
  };

  const item = accordionsData.find((a) => a.id === expandedId);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <div className="container">
        <Accordions accordions={accordionsData} idChanged={idChanged} />
        <div>
          <img src={item.url} alt={item.name} />
        </div>
      </div>
    </>
  );
}
