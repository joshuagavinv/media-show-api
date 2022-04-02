//ROUTES
exports.getShows = (req, res) => {
  try {
    const data = req.body.payload;

    if(!isValidJSON(data) || data == null) {
      res.status(400).send({
        error: "Could not decode request: JSON parsing failed"
      });
    }

    
    const response = this.filterShows(data)

    if(!response) {
      res.status(500).send({
        error: "Some error occurred while filtering the list of show"
      });
    }

    res.send(response);

  } catch(error) {
    res.status(500).send({
      error: err.message || "Some error occurred while processing the media show API."
    });
  }
};

//LOGIC
exports.filterShows = data => {
  try {
    let filteredShow = [];
    for (const show of data) {
      if (show.drm && show.episodeCount > 0)
        filteredShow.push({
          'image': show.image.showImage,
          'slug' : show.slug,
          'title': show.title,
        });
    }

    return {
      'response' : filteredShow,
    };
  } catch(err) {
    console.log(err);
    return false;
  }
}

//HELPER
const isValidJSON = data => {
  try {
    const json = JSON.stringify(data)
    return true
  } catch(err) {
    return false;
  }
}