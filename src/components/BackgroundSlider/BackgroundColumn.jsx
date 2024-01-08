import "./BackgroundColumn.css";

const images = [
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=1",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=2",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=3",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=4",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=6",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=7",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=8",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=1",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=3",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=4",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=6",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=7",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=8",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=1",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=3",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=4",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=6",
  "https://loremflickr.com/100/100/nature,mountain,river,tree?random=7",
];

function BackgroundColumn() {
  const imagesContent = images.map((url) => (
    <img src={url} className="images" />
  ));

  const rowsNum = 15;

  const rowsContent = [];
  for (let i = 0; i < rowsNum; i++) {
    rowsContent.push(
      <div className="scroller">
        <div className="scroller__inner">{imagesContent}</div>
      </div>
    );
  }

  return (
    <section className="scroller-section">
      <div
        className="scroller-wrapper"
        style={{ rotate: "15deg", maxHeight: "calc(100vh - 4rem)" }}
      >
        {rowsContent}
      </div>
    </section>
  );
}

export default BackgroundColumn;
