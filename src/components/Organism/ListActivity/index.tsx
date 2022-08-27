import React from "react";
import { ActivityItem } from "../../Molecul";

export default function ListActivity() {
  return (
    <div className="grid grid-flow-row grid-cols-4 gap-5 mt-12">
      <ActivityItem
        index={1}
        title=""
        onDelete={() => console.log("Delete button")}
        nextPage="/detail/1"
      />
      <ActivityItem
        index={1}
        title=""
        onDelete={() => console.log("Delete button")}
        nextPage="/detail/2"
      />
      <ActivityItem
        index={1}
        title=""
        onDelete={() => console.log("Delete button")}
        nextPage="/detail/3"
      />
      <ActivityItem
        index={1}
        title=""
        onDelete={() => console.log("Delete button")}
        nextPage="/detail/4"
      />
      <ActivityItem
        index={1}
        title=""
        onDelete={() => console.log("Delete button")}
        nextPage="/detail/5"
      />
      <ActivityItem
        index={1}
        title=""
        onDelete={() => console.log("Delete button")}
        nextPage="/detail/6"
      />
    </div>
  );
}
