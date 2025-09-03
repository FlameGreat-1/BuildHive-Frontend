import type { FC } from "react";
import Rating from "@mui/material/Rating";
import { ArrowLeft, FileText } from "lucide-react";

type Attachment = {
  type: "image" | "pdf";
  url: string;
};

type BidDetailsProps = {
  bid?: {
    title: string;
    status: "Pending" | "Accepted" | "Rejected";
    skill: string;
    fixedPrice: number;
    rating: number;
    ratingCount: number;
    proposalMessage: string;
    description: string;
    attachments: Attachment[];
    bidAmount: number;
  };
};

const BidDetails: FC<BidDetailsProps> = ({
  bid = {
    title: "Fix leaking pipe",
    status: "Pending",
    skill: "Plumbing",
    fixedPrice: 100,
    rating: 3.2,
    ratingCount: 28,
    proposalMessage:
      "Hi, I’m available to work on your project. I’ll bring all the necessary tools and materials, and I can start right away.",
    description:
      "There’s a steady leak under the kitchen sink. It looks like a joint issue in one of the main pipes. Need a plumber to fix it urgently.",
    attachments: [
      { type: "image", url: "https://via.placeholder.com/300x200.png?text=Photo+1" },
      { type: "image", url: "https://via.placeholder.com/300x200.png?text=Photo+2" },
      { type: "pdf", url: "https://example.com/sample.pdf" },
    ],
    bidAmount: 100,
  },
}) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back */}
      <button type="button" className="flex items-center gap-2 text-sm text-gray-600 mb-4 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* Header */}
      <div className="bg-white rounded-2xl border shadow p-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold mb-1">{bid.title}</h1>
          <span
            className={`px-3 py-1 text-xs rounded-full ${bid.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : bid.status === "Accepted"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
          >
            {bid.status}
          </span>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1">
          <p className="text-sm text-gray-500">Skill: {bid.skill}</p>
          <p className="font-medium">${bid.fixedPrice} Fixed Price</p>
          <div className="flex items-center gap-2">
            <Rating value={bid.rating} precision={0.1} readOnly size="small" />
            <span className="text-sm text-gray-600">{bid.rating}</span>
            <span className="text-xs text-gray-400">({bid.ratingCount})</span>
          </div>
        </div>
      </div>

      {/* Proposal */}
      <div className="bg-purple-50 rounded-2xl p-4 mb-6">
        <h2 className="font-semibold text-lg mb-2">Proposal Message</h2>
        <p className="text-gray-700">{bid.proposalMessage}</p>
      </div>

      {/* Job Details */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Job Detail</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{bid.description}</p>

        {/* Attachments Carousel */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {bid.attachments.map((file, idx) =>
            file.type === "image" ? (
              <img
                key={idx}
                src={file.url}
                alt={`Attachment ${idx + 1}`}
                className="w-60 h-40 object-cover rounded-lg border shadow"
              />
            ) : (
              <a
                key={idx}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-60 h-40 border rounded-lg bg-gray-50 hover:bg-gray-100 shadow"
              >
                <FileText className="w-10 h-10 text-gray-500 mb-2" />
                <span className="text-sm text-gray-600">View PDF</span>
              </a>
            )
          )}
        </div>
      </div>

      {/* Your Bid */}
      <div className="bg-white rounded-2xl border shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="font-semibold text-lg mb-1">Your Bid</h2>
          <p className="text-sm text-gray-500">Submitted on Aug 2, 2025</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xl font-semibold">${bid.bidAmount}</span>
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm hover:bg-gray-100">
            Edit
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidDetails;