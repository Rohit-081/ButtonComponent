import React from "react";
import Button from "../src/components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button
        label={"Normal Button"}
        onClick={() => {}}
        size="sm"
        disabled={false}
        tooltip="Click Me!"
        border="none"
        color="normal"
      />
      <Button
        label={"Outline Button"}
        onClick={() => {}}
        size="md"
        disabled={false}
        tooltip="Click Me!"
        border="none"
        color="outline"
      />
      <Button
        label={"Disabled Button"}
        onClick={() => {}}
        size="lg"
        disabled={true}
        tooltip="Click Me!"
        border="none"
        color="disabled"
      />
      <Button
        label={"Rounded Button"}
        onClick={() => {}}
        size="lg"
        disabled={false}
        tooltip="Click Me!"
        border="none"
        color="rounded"
      />
      <Button
        label={"Success"}
        onClick={() => {}}
        size="lg"
        disabled={false}
        tooltip="Click Me!"
        border="none"
        color="success"
      />
      <Button
        label={"Danger"}
        onClick={() => {}}
        size="lg"
        disabled={false}
        tooltip="Click Me!"
        border="none"
        color="danger"
      />
      <Button
        label={"Warning"}
        onClick={() => {}}
        size="lg"
        disabled={false}
        tooltip="Click Me!"
        border="none"
        color="warning"
      />
      <Button
        label={"Info"}
        onClick={() => {}}
        size="lg"
        disabled={false}
        tooltip="Click Me!"
        border="none"
        color="info"
      />
    </div>
  );
}

export default App;
