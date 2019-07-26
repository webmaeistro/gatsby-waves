export default {
  default: {
    Wave: {
      width: ["100%", "960px"],
      marginTop: "40px",
      marginLeft: [0, "calc(50% - 480px)"],
      marginBottom: "40px",
      position: "relative",
      display: ["block", "flex"],
    },
    ScrollerContainer: {
      flex: 1,
      paddingLeft: [0, "50px"],
      paddingTop: ["50px", 0],
    },
    ScrollerStep: {
      position: "relative",
      padding: [0, "0 10px"],
      minHeight: "250px",
      display: "flex",
      alignItems: "center",
      borderLeft: ["none", "3px solid transparent"],
    },
    ScrollerProgress: {
      position: "absolute",
      left: ["-12px", "-3px"],
      backgroundColor: "primary",
    },
    StickerContainer: {
      width: ["100vw", "50%"],
      marginLeft: ["calc(50% - 50vw)", 0],
      position: ["sticky", "static"],
      top: [0, "auto"],
      zIndex: [1, "auto"],
      height: ["50vh", "auto"],
    },
    Sticker: {
      position: ["static", "sticky"],
      width: "100%",
      height: ["100%", "40vh"],
      top: ["auto", "30vh"],
      border: ["none", "none"],
    },
    focus: [0.7, 0.5],
  },
}
