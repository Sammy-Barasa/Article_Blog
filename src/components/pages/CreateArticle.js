import React, { useState, useEffect } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"

import DocumentScannerIcon from "@mui/icons-material/DocumentScanner"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useLocation, useNavigate } from "react-router-dom"
import { CreateArticlePost } from "../../api/api"

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme()

export default function CreateArticle() {
  const [form, setForm] = useState({})
  const [currentUser, setCurrentUser] = useState(null)
  const [hasUser, setHasUser] = useState(false)
  const [resp, setResponse] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const user = location.state?.user
    console.log(user)
    user ? setCurrentUser(user) : setCurrentUser(null)
    user ? setHasUser(true) : setHasUser(false)
  }, [location.state?.user])

  useEffect(() => {
    if (resp?.status === 200) {
      console.log(resp.data.id)
      navigate(`/articles/${resp.data.id}`, {
        state: { article_data: resp.data, user: currentUser },
      })
    }
    // console.log("in useffect")
    // console.log(resp)
  }, [resp])

  const handleSubmit = (event) => {
    event.preventDefault()

    const author_name_long = `${currentUser?.first_name}_${currentUser?.last_name}`

    let data_to_send = {
      author_name: author_name_long,
      date: new Date().toString(),
      ...form,
    }

    console.log(data_to_send)
    CreateArticlePost(data_to_send, setResponse)
  }

  const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // const handleChange = (event: SelectChangeEvent) => {
  //   setForm({ ...form, [event.target.name]: event.target.value })
  // }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <DocumentScannerIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            CREATE YOUR ARTICLE
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title of The Article"
            name="title"
            autoComplete="title"
            autoFocus
            value={form.title || ""}
            onChange={onchange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
              value={form.category || ""}
              label="Category"
              onChange={onchange}
            >
              <MenuItem value="tech">Ten</MenuItem>
              <MenuItem value="food">Twenty</MenuItem>
              <MenuItem value="science">Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <textarea
              name="body"
              className="article-body"
              onChange={onchange}
              value={form.body || ""}
              rows="9"
              cols="70"
            ></textarea>
          </FormControl>
          <input
            type="file"
            name="image"
            value={form.image || ""}
            onChange={onchange}
          />

          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Post Article
          </Button>
        </Box>
        {/* </Box> */}
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  )
}
