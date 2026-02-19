import React, { useState } from 'react';
import { Calendar, Clock, Save } from 'lucide-react';

const Avail = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlots, setTimeSlots] = useState([
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '12:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: false },
  ]);

  const toggleSlot = (index) => {
    const updated = [...timeSlots];
    updated[index].available = !updated[index].available;
    setTimeSlots(updated);
  };

  const handleSave = () => {
    // Placeholder: Will save availability
    alert('Availability saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Set Availability
        </h1>

        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Slots</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => toggleSlot(index)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    slot.available
                      ? 'bg-green-50 border-green-500 text-green-700 hover:bg-green-100'
                      : 'bg-gray-50 border-gray-300 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{slot.time}</span>
                  </div>
                  <span className="text-xs mt-1 block">
                    {slot.available ? 'Available' : 'Unavailable'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
            >
              <Save className="w-5 h-5" />
              Save Availability
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Cancel
            </button>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Tips</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
            <li>Click on time slots to toggle availability</li>
            <li>Green slots are available for booking</li>
            <li>Gray slots are unavailable</li>
            <li>Changes are saved immediately</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Avail
