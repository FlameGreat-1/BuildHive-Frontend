import { useEffect, useState } from "react";
import { Search, Loader2 } from "lucide-react";
import StatusComp from "../home/components/StatusComp";

// Job type
interface Job {
  id: number;
  title: string;
  client: string;
  location: string;
  deadline: string;
  price: number;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled";
}

// Dummy job dataset
const dummyJobs: Job[] = [
  {
    id: 1,
    title: "Fix Broken Door",
    client: "John Doe - Carpentry",
    location: "Canberra",
    deadline: "2025-09-10",
    price: 250,
    status: "In Progress",
  },
  {
    id: 2,
    title: "Repair Leaking Pipe",
    client: "Jane Smith - Plumbing",
    location: "Sydney",
    deadline: "2025-09-12",
    price: 400,
    status: "Pending",
  },
  {
    id: 3,
    title: "Paint Living Room",
    client: "Mike Ross - Painting",
    location: "Melbourne",
    deadline: "2025-09-15",
    price: 600,
    status: "Completed",
  },
  {
    id: 4,
    title: "Bathroom Renovation",
    client: "Rachel Zane - Remodeling",
    location: "Perth",
    deadline: "2025-09-18",
    price: 1200,
    status: "Pending",
  },
  {
    id: 5,
    title: "Roof Inspection",
    client: "Harvey Specter - Roofing",
    location: "Adelaide",
    deadline: "2025-09-20",
    price: 750,
    status: "Cancelled",
  },
];

export default function JobSearch() {


  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [filterLocation, setFilterLocation] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Simulated API fetch
  const fetchJobs = async (pageNum: number) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newJobs: Job[] = Array.from({ length: 5 }, (_, i) => ({
      id: pageNum * 100 + i + 1,
      title: ["Fix Window", "Install Cabinets", "Electrical Check", "Garden Work", "Tile Flooring"][
        Math.floor(Math.random() * 5)
      ],
      client: ["John Doe", "Jane Smith", "Mike Ross", "Rachel Zane", "Harvey Specter"][
        Math.floor(Math.random() * 5)
      ] + " - Trade",
      location: ["Sydney", "Melbourne", "Perth", "Adelaide", "Canberra"][
        Math.floor(Math.random() * 5)
      ],
      deadline: "2025-09-" + (10 + Math.floor(Math.random() * 10)),
      price: Math.floor(Math.random() * 800) + 200,
      status: ["Pending", "In Progress", "Completed", "Cancelled"][
        Math.floor(Math.random() * 4)
      ] as Job["status"],
    }));

    setJobs((prev) => [...prev, ...newJobs]);
    if (pageNum === 5) setHasMore(false); // stop after 5 pages
    setLoading(false);
  };

  useEffect(() => {
    // Load initial dummy jobs
    setJobs(dummyJobs);
  }, []);

  useEffect(() => {
    if (page > 1) fetchJobs(page);
  }, [page]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !loading &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  // filter + sort
  const filteredJobs = jobs
    .filter((job) => job.title.toLowerCase().includes(search.toLowerCase()))
    .filter((job) => (filterLocation === "all" ? true : job.location === filterLocation))
    .filter((job) => (filterStatus === "all" ? true : job.status === filterStatus))
    .sort((a, b) => {
      if (sortBy === "latest") return b.id - a.id;
      if (sortBy === "oldest") return a.id - b.id;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "priceLow") return a.price - b.price;
      return 0;
    });

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Search Jobs</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Search */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by job title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none border-none bg-transparent"
          />
        </div>

        {/* Sort */}
        <select
          title='sort'
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border w-fit rounded-lg px-3 py-2"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="priceLow">Price: Low to High</option>
        </select>

        {/* Location filter */}
        <select
          title='location filter'
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          className="border w-fit rounded-lg px-3 py-2"
        >
          <option value="all">All</option>
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Perth">Perth</option>
          <option value="Adelaide">Adelaide</option>
          <option value="Canberra">Canberra</option>
        </select>

        {/* Status filter */}
        <select
          title='status filter'
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border w-fit rounded-lg px-3 py-2"
        >
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <h2 className="font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-500">{job.client}</p>
              <p className="text-sm text-gray-400">{job.location}</p>
              <p className="text-sm text-gray-400">Deadline: {job.deadline}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold">${job.price}</p>
              {/* Replace this with your Status component */}
              <StatusComp status={job.status}/>
            </div>
          </div>
        ))}
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center mt-6">
          <Loader2 className="w-6 h-6 animate-spin text-purple-600" />
        </div>
      )}

      {!hasMore && (
        <p className="text-center text-gray-400 mt-6">No more jobs available</p>
      )}
    </div>
  );
}