import React from "react";
import WeightEntryContainer from "../components/WeightEntryContainer/WeightEntryContainer";
import DailyLiftWrapper from "../components/DailyLift/DailyLiftWrapper";
import { connect } from "react-redux";

function MainPage() {
  return (
    <div>
      <WeightEntryContainer />
      <DailyLiftWrapper />
    </div>
  );
}

export default connect()(MainPage);
