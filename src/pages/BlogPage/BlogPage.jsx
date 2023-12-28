
import Block from "./Block/Block";

import './blog.css'

const BlogPage = () => {
  return (
    <section>
      <div className="section-inner">
        <div className="choosen">
          <div className="leftSide">
            <Block
              src={
                "https://travio.smartdemowp.com/wp-content/uploads/2021/01/news-9.jpg"
              }
            />

            <Block
              src={
                "https://travio.smartdemowp.com/wp-content/uploads/2021/01/news-11.jpg"
              }
            />

            <Block
              src={
                "https://travio.smartdemowp.com/wp-content/uploads/news-10.jpg"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
