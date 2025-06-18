import React from "react";

const Career = () => {
  return (
    <div style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2
        style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Career
      </h2>
      <p style={{ fontSize: "18px", color: "#888", lineHeight: "1.6" }}>
        Punjab Carbonic offers fantastic and exciting career opportunities. We
        believe in employee empowerment to achieve greater corporate goals. We
        are an equal opportunity employer. At Punjab Carbonic, we provide an
        interesting and long-term career prospective.
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#888",
          marginTop: "20px",
          lineHeight: "1.6",
        }}
      >
        Mail us your resume at{" "}
        <a
          href="mailto:rajgirllpsales@gmail.com"
          style={{ color: "#FFF", fontWeight: "bold", textDecoration: "none" }}
        >
          rajgirllpsales@gmail.com
        </a>
        <br />
        We shall get back to you for any suitable position available.
      </p>
    </div>
  );
};

export default Career;
