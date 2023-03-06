import MainNavigation from "@/components/layout/MainNavigation";
import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a list of active React Meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

// Pre render for every request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from API
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

// Pre render for request after 10 seconds from last pre render
export async function getStaticProps() {
  //fetch data from API

  const client = await MongoClient.connect(
    "mongodb+srv://<username>:<password>@cluster0.fdlahzk.mongodb.net/<dbName>?retryWrites=true&w=majority"
  );

  //  Get db
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
