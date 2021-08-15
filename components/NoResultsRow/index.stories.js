import React from "react";
import NoResultsRow from "./index";

export default {
  component: NoResultsRow,
  title: "List/No Results Row",
};

export const KitchenSink = () => <NoResultsRow message="No Results found" />;

export const DefaultMessage = () => <NoResultsRow />;

export const NumberAsMessage = () => <NoResultsRow message={123456789012} />;

export const ComponentAsMessage = () => (
  <NoResultsRow
    message={<span className="text-success">I am a component</span>}
  />
);

export const ArrayAsMessage = () => <NoResultsRow message={["Not found"]} />;

export const NullAsMessage = () => <NoResultsRow message={null} />;
