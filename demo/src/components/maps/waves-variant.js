export default {
  sidebar: {
    Wave: {
      width: "100%",
      marginTop: "40px",
      marginLeft: 0,
      marginBottom: "40px",
      position: "relative",
      display: ["block", "flex"],
    },
    ScrollerContainer: {
      flex: [1, "50vw"],
      paddingLeft: [0, "51vw"],
      marginRight: [0, "40px"],
      paddingTop: ["50px", 0],
    },
    ScrollerStep: {
      position: "relative",
      padding: 0,
      minHeight: "250px",
      display: "flex",
      alignItems: "center",
      borderLeft: "none",
      width: ["auto", "388px"],
    },
    ScrollerProgress: {
      position: "absolute",
      left: "-12px",
      // backgroundColor: "primary",
    },
    StickerContainer: {
      width: ["100vw", "50vw"],
      marginLeft: ["calc(50% - 50vw)", 0],
      position: ["sticky", "fixed"],
      top: 0,
      left: ["auto", 0],
      zIndex: [1, -1],
      height: ["50vh", "auto"],
    },
    Sticker: {
      position: ["static", "sticky"],
      width: "100%",
      height: ["100%", "100vh"],
      top: ["auto", 0],
      border: ["none", "none"],
    },
    focus: [0.7, 0.5],
  },
}
