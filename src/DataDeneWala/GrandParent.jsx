import React from "react";
import Parent from "./Parent";
import { DataProvider } from "./Store";

const GrandParent = () => {
  let gold = "100kg";
  let land = "100 bega";
  return (
    <DataProvider value={{gold,land}}>
      <div className="border border-danger p-5 text-center">
        <h1>GrandParent</h1>
        <Parent gold={gold} />
      </div>
    </DataProvider>
  );
};

export default GrandParent;
