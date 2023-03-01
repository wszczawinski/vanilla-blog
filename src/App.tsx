import { useEffect, useState } from "react";

import { IBlogPost } from "./types";
import { fetchBlogApi } from "./services";

import BlogCard from "./BlogCard";
import "./App.scss";

function App() {
  const [data, setData] = useState<IBlogPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchBlogApi()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch data. Please try again.");
      });
  }, []);

  /*
  alternative - instead of using useState and useEffect there could be useQuery from "react-query"

  const { data, status } = useQuery<IBlogPost[], Error>(
    QUERY_KEYS.BLOG_POSTS,
    fetchBlogApi
  );

  here status would handle conditions to render posts or error/loading messages, example:
  
  if (status === 'error') {
    return <div>{errorMessage}</div>;
  }
  */

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="l-application">
      <div className="l-main u-vertically-center">
        <section className="row">
          <>
            {loading ? (
              <p>Loading...</p>
            ) : data && data.length ? (
              data.map((post) => <BlogCard post={post} key={post.id} />)
            ) : (
              <p>No data available at the moment</p>
            )}
          </>
        </section>
      </div>
    </main>
  );
}

export default App;
