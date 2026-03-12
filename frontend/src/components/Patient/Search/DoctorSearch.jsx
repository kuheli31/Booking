import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { FunnelIcon } from "@heroicons/react/24/outline"
import doctors from "../../Profile/DoctorProfile/ProfileDesignDoctor"
import { useSearch } from "../../../context/Search/SearchContext"

export default function DoctorSearch() {

  const navigate = useNavigate()

  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [filters, setFilters] = useState({})
  const [results, setResults] = useState([])

 const matchDoctor = (doc, text) => {

  const query = text
    .toLowerCase()
    .replace("dr.", "")
    .replace("doctor", "")
    .trim()

  const name = doc.name.toLowerCase()
  const specialization = doc.specialization.toLowerCase()

  if (name.includes(query)) return true
  if (specialization.includes(query)) return true

  const words = query.split(" ")

  return words.some(word =>
    name.includes(word) ||
    specialization.includes(word)
  )
}

  const handleInput = (value) => {

    setSearch(value)

    if (!value.trim()) {
      setSuggestions([])
      setResults([])
      return
    }

    const results = doctors.filter(doc => matchDoctor(doc, value))
    setSuggestions(results.slice(0,5))
  }

  const handleSearch = () => {

    let results = [...doctors]

    if (search.trim()) {
      results = results.filter(doc => matchDoctor(doc, search))
    }

    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        results = results.filter(doc =>
          doc[key]?.toLowerCase().includes(filters[key].toLowerCase())
        )
      }
    })

    if (!search && Object.keys(filters).length === 0) {
      return
    }

    if (results.length === 0) {
      alert("Doctor not found")
      return
    }

    setResults(results)

    // hide dropdown
    setSuggestions([])
  }

  const handleDoctorClick = (id) => {

    // clear everything like amazon search
    setSuggestions([])
    setResults([])
    setSearch("")

    navigate(`/patient/doctor/${id}`)
  }

  return (

    <div className="flex w-full items-center bg-white/10 backdrop-blur-md rounded-xl shadow-md relative">

      <input
        type="text"
        placeholder="Search Doctors"
        value={search}
        onChange={(e)=>handleInput(e.target.value)}
        onKeyDown={(e)=> e.key==="Enter" && handleSearch()}
        className="flex-1 px-4 py-2 bg-transparent text-gray-200 placeholder-gray-300 focus:outline-none"
      />

      <Popover className="relative">
        <PopoverButton className="px-3 py-2 border-l border-white/20 hover:bg-white/10 transition">
          <FunnelIcon className="h-5 w-5 text-gray-200" />
        </PopoverButton>

        <PopoverPanel className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl z-50 p-4">

          <div className="space-y-3">

            <h3 className="font-semibold text-gray-800">Filters</h3>

            <select
              className="w-full border rounded-md p-2"
              onChange={(e)=>setFilters({...filters, specialization:e.target.value})}
            >
              <option value="">Specialization</option>
              <option>Cardiologist</option>
              <option>Dermatologist</option>
              <option>Neurologist</option>
            </select>

            <select
              className="w-full border rounded-md p-2"
              onChange={(e)=>setFilters({...filters, location:e.target.value})}
            >
              <option value="">Location</option>
            </select>

            <select
              className="w-full border rounded-md p-2"
              onChange={(e)=>setFilters({...filters, availability:e.target.value})}
            >
              <option value="">Availability</option>
            </select>

            <select
              className="w-full border rounded-md p-2"
              onChange={(e)=>setFilters({...filters, ratings:e.target.value})}
            >
              <option value="">Ratings</option>
            </select>

            <select
              className="w-full border rounded-md p-2"
              onChange={(e)=>setFilters({...filters, cost:e.target.value})}
            >
              <option value="">Cost</option>
            </select>

            <button
              onClick={handleSearch}
              className="w-full bg-sky-600 py-2 text-white rounded-md hover:bg-sky-700 transition"
            >
              Apply Filters
            </button>

          </div>

        </PopoverPanel>
      </Popover>

      <button
        onClick={handleSearch}
        className="px-5 py-2 bg-gray-200 text-gray-800 font-medium hover:bg-white transition rounded-r-xl"
      >
        Search
      </button>

      {/* Suggestions dropdown */}

      {suggestions.length>0 && (

        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl z-50">

          {suggestions.map(doc => (

            <div
              key={doc.id}
              onClick={()=>handleDoctorClick(doc.id)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >

              <img
                src={doc.profilePicture}
                className="w-8 h-8 rounded-full"
              />

              <span>{doc.name}</span>

            </div>

          ))}

        </div>

      )}

      {/* Doctor Results */}

      {results.length > 0 && (

        <div className="absolute top-full left-0 w-full mt-4 flex flex-col gap-4">

          {results.map(doc => (

            <div
              key={doc.id}
              onClick={()=>handleDoctorClick(doc.id)}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg"
            >

              <img
                src={doc.profilePicture}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div className="flex flex-col">

                <span className="text-lg font-semibold text-gray-800">
                  {doc.name}
                </span>

                <span className="text-gray-600">
                  {doc.specialization}
                </span>

                <span className="text-gray-500 text-sm">
                  {doc.experience} years experience
                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}