// import { Article } from "@mui/icons-material"
import axiosFetch from "../Axios"

export const RegisterUser = (userData, setData, setError) => {
  axiosFetch()
    .post("/users", userData)
    .then((response) => {
      console.log(response)
      setData(response)
    })
    .catch((error) => {
      console.log(error)
      setError(error)
    })
}

export const LoginUser = (userData, setData, setError) => {
  axiosFetch()
    // .post("/users/authenticate", userData)
    .post("/login", userData)
    .then((response) => {
      console.log(response)
      setData(response)
      // console.log(response.status)
    })
    .catch((error) => {
      console.log(error)
      setError(error)
    })
}

export const CreateArticlePost = (ArticleData, setResponse) => {
  axiosFetch()
    .post("/articles", ArticleData)
    .then((response) => {
      console.log(response)
      setResponse(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const GetArticleMany = (setData) => {
  // setLoading(true)
  axiosFetch()
    .get("/articles")
    .then((response) => {
      // console.log(response.data)
      setData(response.data)
    })
    .catch((error) => {
      console.log(error)
      // set(false)
    })
}

export const CreateComment = (CommentData, article_id, setLoading) => {
  setLoading(true)
  axiosFetch()
    .post(`/articles/${article_id}/comments`, CommentData)
    .then((response) => {
      console.log(response.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    })
}

export const GetComment = (setData) => {
  axiosFetch()
    .get("calc/loanproducts/")
    .then((response) => {
      console.log(response.data)
      setData(response.data)
    })
    .catch((error) => {
      console.log(error)
      setData(error)
    })
}
