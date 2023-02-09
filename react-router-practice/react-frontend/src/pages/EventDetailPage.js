import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Deatail Page</h1>
      <p>Details for {params.eventID} </p>
    </>
  );
}

export default EventDetailPage;
