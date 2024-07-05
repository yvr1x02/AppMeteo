import { useParams } from "react-router-dom";

const MyWeatherDetailsPage = () => {
  const { city } = useParams();

  return (
    <div>
      <h1> {city}</h1>
    </div>
  );
};

export default MyWeatherDetailsPage;
