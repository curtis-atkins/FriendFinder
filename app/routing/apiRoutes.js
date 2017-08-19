app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});

app.post("/api/friends", function(req, res) {
  var newFriends = req.body;
    console.log(newFriends);
});