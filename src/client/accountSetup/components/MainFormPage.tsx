
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocationPicker from "../../../generalComponents/LocationPicker";
import MultiSelect from "../../../generalComponents/MultiSelect";

interface Location {
  lat: number;
  lon: number;
  name: string;
}

interface Option {
  label: string;
  value: string;
}

const tagOptions: Option[] = [
  { label: "Remote", value: "remote" },
  { label: "Onsite", value: "onsite" },
  { label: "Full Time", value: "fulltime" },
  { label: "Part Time", value: "parttime" },
];

export default function MainFormPage() {
  const [step, setStep] = useState(0);
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    const payload = {
      tags: selectedTags,
      locations: locations,
    };
    console.log("Submitting:", payload);
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  return (
    <div className="w-screen bg-light-white min-h-[clamp(500px, 100vh, 900px)] mx-auto mt-10 space-y-6">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
          >
            <MultiSelect
              options={tagOptions}
              selected={selectedTags}
              setSelected={setSelectedTags}
            />
            <button
              onClick={next}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <LocationPicker
              locations={locations}
              setLocations={setLocations}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prev}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Submit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
