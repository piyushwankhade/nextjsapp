"use client";
import CountryAutocomplete from "@/app/partials/countryAutocomplete";
import React from "react";

const TripForm = () => {
  return (
    <div>
        <div className="mb-4">
        <span className="block text-gray-700">Trip Details</span>
        <span className="block text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem similique eos ullam</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Where are you going?</label>
        <CountryAutocomplete/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Is this trip a cruise?</label>
        <div className="mt-1">
          <label className="mr-4">
            <input type="radio" name="cruise" value="yes" className="mr-1" />{" "}
            Yes
          </label>
          <label>
            <input type="radio" name="cruise" value="no" className="mr-1" /> No
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">When are you going?</label>
        <div className="flex space-x-4 mt-1">
          <input type="date" className="w-full p-2 border rounded-md" />
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Who is going?</label>
        <div className="mt-1">
          <label className="block text-gray-700">Zip Code*</label>
          <div className="flex space-x-4 mt-1">
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="10004"
            />
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="New York"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-gray-300 text-gray-600 rounded-md px-4 py-2">
          Cancel
        </button>
        <button className="bg-green-500 text-white rounded-md px-4 py-2">
          Create a New Trip
        </button>
      </div>
    </div>
  );
};

export default TripForm;
