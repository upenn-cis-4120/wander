import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import ClearableInput from "../components/ClearableInput";
import RangeSlider from "../components/RangeSlider";
import Checkable from "../components/Checkable";
import transportModes from "../backend/transportation-options.json";
import { Checkbox } from "@mui/material";
import CheckableGrid from "../components/CheckableGrid";

function TripInitPage() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }
    const handleNext = () => {
        navigate("/tripPlan");
    }

    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-96">
                <div className="mt-20"></div>
                <div className="text-4xl font-bold mb-12">Hi Jimmy!</div>
                <ProgressBar brightCount={2} />
                <div className="text-2xl font-bold my-6">Where do you want to explore?</div>
                <ClearableInput placeholder="Search for a city" />
                <div className="text-2xl font-bold my-6">What is your budget?</div>
                <RangeSlider minValue="0" maxValue="1000"/>
                <div className="text-2xl font-bold my-6">How would you like to get around?</div>
                <div className="mt-4"></div>
                <CheckableGrid items={transportModes} />
            </div>
            <div className="fixed bottom-4 w-96 flex justify-between">
                <BackButton text="Back" onClick={handleBack} width="32" height="12" />
                <PrimaryButton text="Next" onClick={handleNext} width="32" height="12" />
            </div>
        </div>
  );
}

export default TripInitPage;