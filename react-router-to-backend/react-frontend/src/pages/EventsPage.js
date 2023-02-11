import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  // const events = useLoaderData();
  const { events } = useLoaderData();

  //Display if error in loading
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;

  return (
    <Suspense fallback={ <p style={{textAlign: 'center'}}>Loading... </p> } >
      <Await resolve={events}>  
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

// Defer function used to move to page and then display the data

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json()
    return resData.events;
  }
}

export function loader() {
  //Pass object to defer that contains all HTTP requests
  return defer({
    events: loadEvents(),
  });
}

// Code for async loading before page rendered

// export async function loader() {
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {
//     // throw {message: "couldn't load data"}

//     // return { isError: true, message: 'Could not fetch the data' }

//     // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
//     //   status: 500,
//     // });

//     throw json({ message: "Could not fetch events" }, { status: 500 });
//   } else {
//     // const resData = await response.json();

//     // return resData.events;

//     // const res = new Response('any data', {status: 201})
//     // return res;

//     // returning response like this with useLoader will give the data that is part of the response
//     return response;
//   }
// }
