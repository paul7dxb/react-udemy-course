// domain.com/news/newsId
import { useRouter } from 'next/router'

function DetailPage(){

  //Get access to values in the URL
  const router = useRouter();
  const newsId = router.query.newsId; //will get info on each render -> blank and then  will get the value

  // Send request to backend API using newsId

    return <h1>Page for {newsId}</h1>

  }
  
  export default DetailPage