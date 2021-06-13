import "./Info.css";
import React from "react";

const Info = () => {
  return (
    <div className="info">
      <p>
        UnSplash for <strong>Pro</strong>grammers
      </p>
      <div className="card">
        <img
          src="https://image.freepik.com/free-vector/decision-making-abstract-concept_335657-3039.jpg"
          alt="choices"
        />
        <div className="content">
          <h5>Leave Choosing Pictures To The Pros</h5>
          <p>
            UnSplash Pro curates the 10 best pictures from UnSplash on your
            search term, so you can focus on the <strong>Pro</strong>gramming{" "}
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://image.freepik.com/free-vector/duplicate-concept-illustration_114360-4010.jpg"
          alt="copy"
        />
        <div className="content">
          <h5>Easy-To-Copy HTML Code Snippets</h5>
          <p>
            As a developer, we know how annoying it is to download images, move
            file and then paste it so we can finally use an image in the
            project.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
