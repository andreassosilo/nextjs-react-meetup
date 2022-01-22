import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.news;

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
