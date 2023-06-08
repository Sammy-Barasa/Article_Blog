import { useEffect, useState } from "react"
import React from "react"
import FirstImage from "../../assets/pexels-athena-2582937.jpg"
import PostData from "../utils/PostData"
import { Link } from "react-router-dom"
import { GetArticleMany } from "../../api/api.js"

function Articles() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/articles")
        .then((r) => r.json())
        .then(data => setArticles(data));
  },[])
  const data = [
    {
      body: "xyz",
      imgurl: FirstImage,
      author_name: "author 1",
      date: "07/06/2003 03:09",
      title: "title 1",
      category: "tech",
    },
    {
      body: "xyz",
      imgurl: FirstImage,
      author_name: "author 1",
      date: "07/06/2003 03:09",
      title: "title 1",
      category: "tech",
    },
    {
      body: "xyz",
      imgurl: FirstImage,
      author_name: "author 1",
      date: "07/06/2003 03:09",
      title: "title 1",
      category: "tech",
    },
  ]

  const [PostListAll, setPostListAll] = useState([])
  const [PostList, setPostList] = useState([])
  const startIndex = 3

  useEffect(() => {
    GetArticleMany(setPostListAll)
    console.log("here")
    console.log(PostListAll)
    setPostList(PostListAll.slice(0, 2))
    // setPostListAll(PostListAll.slice())
  }, [PostListAll.length, startIndex])

  return (
    <div>
      <div>
        <div className="articles-recent-title">
          <p>
            <b>Recent posts</b>
          </p>
          <Link to="/articles">View all</Link>
        </div>
        <div className="articles-recents">
          {PostList.length === 0
            ? "Data Loading..."
            : PostList.map((post, index) => {
                return <PostData post={post} index={index} key={index} />
              })}
        </div>
      </div>
      <div className="articles-posts">
        <h3>Blog</h3>
        {articles.length === 0
          ? "Data Loading..."
          : articles.map((post, index) => {
              return <PostData post={post} index={index} inlist={true} />
            })}
      </div>
      <hr />
    </div>
  )
}

export default Articles
