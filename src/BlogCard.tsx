import { BLOG_CARD_TITLE_LENGTH } from "./constants";
import { parseDate, truncateString } from "./utils";
import { IBlogPost } from "./types";

import "./BlogCard.scss";

interface BlogPostType {
  post: IBlogPost;
}

function BlogCard({ post }: BlogPostType) {
  return (
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
              {truncateString(post.title.rendered, BLOG_CARD_TITLE_LENGTH)}
            </a>
          </h3>
          <h6>
            by <a href="#">{post.author}</a> on {parseDate(post.date)}
          </h6>
          <hr className="is-muted" />
          <p>Article</p>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
