// domain.com/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";

function NewMeetupPage() {
  const router =  useRouter()
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    // redirect user back to homepage after response
    router.push('/')
  }

  return <>
  <Head>
    <title>Add a Meetups</title>
    <meta name="description" content="Add a new meetup here" />
  </Head>
  <NewMeetupForm onAddMeetup={addMeetupHandler} />;
  </>
}

export default NewMeetupPage;
