//import express from "express";
const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('200 OK')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})