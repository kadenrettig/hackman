// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { AllHtmlEntities } from "html-entities";
// import { findDOMNode } from "react-dom";

// const entities = new AllHtmlEntities();

// function FetchWord({ wordNum }) {
//   const [word, setWord] = useState();
//   const [key, setKey] = useState();

//   function assembleWord(word) {
//     console.log(word);
//     setWord(word);
//   }

//   function displayWord() {
//     return <p className="text-white">{entities.decode(word)}</p>;
//   }

//   // var readLine = require("readline");
//   const fs = require("fs");

//   const file = readline.createInterface({
//     input: fs.createReadStream("key.txt"),
//     output: process.stdout,
//     terminal: false,
//   });

//   file.on("line", (line) => {
//     setKey(line);
//   });

//   useEffect(() => {
//     axios
//       .get("https://clemsonhackman.com/api/word?key=" + key)
//       .then((response) => {
//         console.log(response.data);
//         assembleWord(response.data.results[0]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [wordNum]);

//   return <div>{displayWord}</div>;
// }

// export default FetchWord;
