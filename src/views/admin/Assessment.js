import React from "react";

// components

import CardAssessment from "components/Cards/CardAssessment.js";

export default function Assessments() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardAssessment />
        </div>
      </div>
    </>
  );
}
