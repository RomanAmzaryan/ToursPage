import React from "react";

import "./chooseToursContent.css";
import ToursPageSearchBar from "../../../../components/ToursPageSearchBar/ToursPageSearchBar";
import ToursPageContinent from "../../../../components/ToursPageContinent/ToursPageContinent";
import ToursPageRangeBar from "../../../../components/ToursPageRangeBar/ToursPageRangeBar";
import ToursPageDuration from "../../../../components/ToursPageDuration/ToursPageDuration";

export default function ChooseToursContent() {
  return (
    <div className="rightSide">
      <ToursPageSearchBar />

      <div id="travio_tour_filter-3" className="widget_travio_tour_filter">
        <ToursPageContinent />
        <ToursPageRangeBar />
        <ToursPageDuration />
      </div>
      <div id="custom_html-4" className="widget_text widget_custom_html">
        <div className="textwidget custom-html-widget">
          <div className="advice-widget" />
        </div>
      </div>
    </div>
  );
}
