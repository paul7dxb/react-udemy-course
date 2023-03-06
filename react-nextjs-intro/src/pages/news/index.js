// domain.com/news

import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/my-first-article">My First Article</Link>
        </li>
        <li>
        <Link href="/news/my-second-article">My Second Article</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
