import {
  FileText,
  File,
  FileSpreadsheet,
  Folder,
  Users,
  Star,
  MoreVertical,
} from "lucide-react";

import IndexLayout from "../layouts";
import MainLayout from "../layouts/Main";

const files = [
  {
    name: "Budget_Q1_Report.xlsx",
    icon: <FileSpreadsheet className="text-green-600 w-4 h-4" />,
    shared: true,
    reason: "You often open around this time",
    location: "Personal Drive",
  },
  {
    name: "ProjectAlpha_Overview.docx",
    icon: <FileText className="text-blue-500 w-4 h-4" />,
    reason: "You edited • 3:10 PM",
    location: "Work Documents",
  },
  {
    name: "LaunchChecklist_2025.xlsx",
    icon: <FileSpreadsheet className="text-green-600 w-4 h-4" />,
    starred: true,
    reason: "You edited • Jun 21, 2025",
    location: "Team Workspace",
  },
  {
    name: "BrandAssets_Guide.pdf",
    icon: <FileText className="text-blue-500 w-4 h-4" />,
    shared: true,
    reason: "You modified • Jun 8, 2025",
    location: "Shared with me",
  },
  {
    name: "MeetingNotes_May30.md",
    icon: <FileText className="text-blue-500 w-4 h-4" />,
    shared: true,
    reason: "You opened • May 30, 2025",
    location: "Personal Drive",
  },
  {
    name: "StrategyReview_Outline.docx",
    icon: <FileText className="text-blue-500 w-4 h-4" />,
    shared: true,
    reason: "You opened • Jun 1, 2025",
    location: "Shared with me",
  },
  {
    name: "Survey_Results_2025.csv",
    icon: <FileSpreadsheet className="text-green-600 w-4 h-4" />,
    shared: true,
    reason: "You opened • Apr 23, 2025",
    location: "Archived",
  },
  {
    name: "Internal_Memo_June.md",
    icon: <FileText className="text-blue-500 w-4 h-4" />,
    shared: true,
    reason: "You edited • Jun 1, 2025",
    location: "Personal Drive",
  },
  {
    name: "OfferTemplate_2025.docx",
    icon: <File className="text-blue-700 w-4 h-4" />,
    reason: "You opened • May 29, 2025",
    location: "HR Documents",
  },
  {
    name: "Travel_Itinerary_June2025.pdf",
    icon: <FileText className="text-blue-500 w-4 h-4" />,
    reason: "You opened • Jun 9, 2025",
    location: "Shared with me",
  },
];

export default function HomeScreen() {
  return (
    <IndexLayout>
      <MainLayout>
        <div className="flex items-center justify-between bg-[#E8F0FE] text-sm text-blue-800 px-4 py-3 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>

            <span>
              <strong className="font-medium">71% of storage used</strong>
              <span className="text-blue-800 ml-1">
                If you run out, you can't create, edit, and upload files.
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-4 ml-4">
            <a href="#" className="hover:underline">
              Clean up space
            </a>
            <a href="#" className="hover:underline">
              Get storage
            </a>

            <button className="p-1 hover:bg-blue-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-3 py-10">
          <h2 className="text-xl font-medium text-gray-900">
            Welcome to Drive
          </h2>
          <div className="flex items-center w-full max-w-xl bg-[#EDF2FA] px-4 py-2 rounded-full shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search in Drive"
              className="flex-1 bg-transparent focus:outline-none text-sm text-gray-700"
            />
          </div>
        </div>

        <div className="p-4 overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Reason suggested</th>
                <th className="py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  {/* Name */}
                  <td className="py-2 pr-4 flex items-center space-x-2">
                    {file.icon}
                    <span className="truncate">{file.name}</span>
                    {file.shared && (
                      <Users className="text-gray-500 w-4 h-4 ml-1" />
                    )}
                    {file.starred && (
                      <Star className="text-yellow-500 w-4 h-4 ml-1" />
                    )}
                  </td>

                  {/* Reason */}
                  <td className="py-2 pr-4 text-gray-600">{file.reason}</td>

                  {/* Location */}
                  <td className="py-2 flex items-center space-x-2 text-gray-600">
                    <Folder className="text-gray-400 w-4 h-4" />
                    <span>{file.location}</span>
                  </td>

                  {/* Menu */}
                  <td className="py-2 text-right">
                    <MoreVertical className="text-gray-400 w-4 h-4 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MainLayout>
    </IndexLayout>
  );
}
