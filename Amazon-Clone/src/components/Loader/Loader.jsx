import React from "react";
import { SyncLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Adjust based on your page layout
      }}
    >
      <SyncLoader speedMultiplier={1} />
    </div>
  );
}
export default Loader;
