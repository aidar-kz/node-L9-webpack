import axios from "axios";

function getText() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const url = "https://jse-211.herokuapp.com/text/4";

  axios
    .get(url, config)
    .then((res) => {
      document.getElementById("text").innerHTML = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// module.exports = getText;
export default getText;
