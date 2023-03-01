import { useEffect, useState } from "react";

import { IBlogPost } from "./types";
import { fetchBlogApi } from "./services";

import "./App.scss";

function App() {
  const [data, setData] = useState<IBlogPost[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchBlogApi()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="l-application">
      <div className="l-main u-vertically-center">
        <section className="row">
          <>
            {loading ? (
              <p>Loading...</p>
            ) : (
              data?.map((post) => (
                <article className="col-4 col-medium-3" key={post.id}>
                  <div className="p-card--highlighted card">
                    <div className="p-card__content ">
                      <h4 className="p-text--x-small-capitalised header">
                        Cloud and server
                      </h4>
                      <hr className="is-muted" />
                      <img
                        className="p-card__image"
                        alt=""
                        height="185"
                        width="330"
                        src={post.featured_media}
                      />
                      <h3 className="article-title">
                        <a href={post.link} target="_blank">
                          {post.title.rendered}
                        </a>
                      </h3>
                      <h6>
                        by <a href="#">{post.author}</a> on {post.date}
                      </h6>
                      <hr className="is-muted" />
                      <p>Article</p>
                    </div>
                  </div>
                </article>
              ))
            )}
          </>
        </section>
      </div>
    </main>
  );
}

export default App;
