import React from "react";
import {
  EmptyImage,
  GlobalTemplate,
  HeaderMenu,
  ListActivity,
} from "../../components";

export default function Dashboard() {
  return (
    <GlobalTemplate>
      <>
        <HeaderMenu
          dataCy="activity-add-button"
          title="Activity"
          onAddButton={() => console.log("on add button")}
        />
        {/* <EmptyImage isNewActivityPage={false} dataCy="activity-empty-state" /> */}
        <ListActivity />
      </>
    </GlobalTemplate>
  );
}
