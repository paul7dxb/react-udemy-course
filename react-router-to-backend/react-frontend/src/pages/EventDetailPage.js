import { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

//Loading data for single event details
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch details" }, { status: 500 });
  } else {
    const resdata = await response.json();
    return resdata.event;
  }
}

//Loading data for all events list
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.eventID;
  //use await to tell react router to wait for loadEvent data before loading the page.
  // loadEvents can be loaded after the page is loaded
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventID = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + eventID, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete the event" }, { status: 500 });
  }
  return redirect("/events");
}
