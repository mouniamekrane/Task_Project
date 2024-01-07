// import { useEffect } from "react";
// import "../styles.css"; 

// const BackgroundColumn = () => {
//   useEffect(() => {
//     const iconSection = document.getElementsByClassName("icon-section")[0];

//     for (let i = 0; i < 3; i++) {
//       const div = document.createElement("div");
//       div.setAttribute("class", "icon-holder");

//       setTimeout(() => {}, 1000);

//       for (let j = 0; j < 15; j++) {
//         const randomNumber = Math.floor(Math.random() * 100);
//         const imageSrc = `https://loremflickr.com/100/100/nature,mountain,river,tree?random=${randomNumber}`;

//         const img = document.createElement("img");
//         img.setAttribute("class", "icon");
//         img.setAttribute("src", imageSrc);

//         div.appendChild(img);
//       }

//       iconSection.appendChild(div);
//     }
//   }, []); 

//   return <div className="icon-section"></div>;
// };

// export default BackgroundColumn;
// const styles = {
//   background: {
//     height : "100%",
//     backgroundColor: "#FF0000",
//     flexGrow: 1,
//     flexShrink: 1,
//     color: "#FFF",
//   },
// };

function BackgroundSide() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aspernatur
      eveniet, itaque fuga non maxime ullam repellat deleniti atque facere error
      unde consectetur, quos eaque laudantium eius eos rem molestiae.
    </div>
  );
}

export default BackgroundSide;
