import newsList from './NewsData';
import NewsItem from './NewsItem';

export default function NewsApp() {
  console.clear();
  console.log(newsList);

  return (
    <>
      <h1 className="text-center text-3xl font-extrabold mb-10 mt-5">News</h1>
      <div className="grid gap-3 px-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {newsList.status === 'ok' && newsList.articles.map((news, i) => news.title !== '[Removed]' && <NewsItem newsItem={news} key={i} />)}
      </div>
    </>
  )
}