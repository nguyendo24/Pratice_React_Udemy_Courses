import React from "react";
import ReactDom from "react-dom";
import CommenDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <>
      <ApprovalCard>
        <div>
          <h4>Are you sure?</h4>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommenDetail
          author="Selena"
          timeAgo="10PM"
          text="hello"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommenDetail
          author="Brianna"
          timeAgo="Today at 11PM"
          text="great"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommenDetail
          author="Thien"
          timeAgo="Today at 12PM"
          text="writing"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommenDetail
          author="Abel"
          timeAgo="Today at 1PM"
          text="reading"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
