import React, { Fragment } from "react";
import Form from "./Form";
import Surveys from "./Surveys";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Surveys />
    </Fragment>
  );
}
