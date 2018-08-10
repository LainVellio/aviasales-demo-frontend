import React from "react";

import Header from "./Header";
import Destination from "./Destination";
import BestPrice from "./BestPrice";
import Information from "./Information";
import Mobile from "./Mobile";
import Footer from "./Footer";

export default function() {
  return (
    <div>
      <Header />
      <Destination />
      <BestPrice />
      <Information />
      <Mobile />
      <Footer />
    </div>
  );
}
