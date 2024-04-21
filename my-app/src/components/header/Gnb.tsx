import test from "../../assets/logo.png";
export default function Gnb() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.08)",
      }}
    >
      <img
        src={test}
        alt="test"
        onClick={() => (window.location.href = "/")}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
    </div>
  );
}
