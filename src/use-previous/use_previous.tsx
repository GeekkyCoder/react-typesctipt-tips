import { useEffect, useState } from "react";
import usePrevious from "../hooks/usePrevious";

interface Item {
  name: string;
  price: string;
  description: string;
}

interface AIInfo {
  data: [] | Item[];
}

interface ArtificialIntelligenceProps {
  aiStuff: AIInfo;
}

const ArtificialIntelligence: React.FC<ArtificialIntelligenceProps> = ({
  aiStuff,
}) => {
  const previousStuff = usePrevious<AIInfo>(aiStuff);

  useEffect(() => {
    console.log(previousStuff);
  }, [aiStuff]);

  return <div>Advvanced Artificial Intelligence</div>;
};

const MainArtificialIntelligence = () => {
  const [aiStatus, setAiStatus] = useState<Item[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAiStatus((prev:any) => {
        return [
          ...prev,
          { name: "Pulao", price: 20, description: "nice pulao" },
        ];
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const changeData = () => {
    setAiStatus((prev:any) => {
       return [...prev, {name:"Beef", price:30,description:"nicr beef"}]
    });
  };

  return (
    <>
      <ArtificialIntelligence aiStuff={{ data: aiStatus }} />
      <button onClick={changeData}>click</button>
    </>
  );
};

export default MainArtificialIntelligence;
