import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Navigation, Train, Car } from "lucide-react";

interface Contact {
  name: string;
  company: string;
  country: "Qatar" | "Saudi Arabia" | "Oman" | "South Africa";
  type: "OnSite" | "OnLine" | "Online/Onsite" | "Not Confirmed";
}

const contacts: Contact[] = [
  {
    name: "Miss Melissa",
    company: "Roya Holding",
    country: "Qatar",
    type: "OnSite",
  },
  {
    name: "Mr. Ghassan Merhi",
    company: "Victoria Interlink",
    country: "Qatar",
    type: "OnSite",
  },
  {
    name: "Miss Ibtissam",
    company: "Roya Holding",
    country: "Qatar",
    type: "OnSite",
  },
  {
    name: "Mr. Razak",
    company: "Miles Tec",
    country: "Saudi Arabia",
    type: "OnSite",
  },
  {
    name: "Mr. Hassan Ahmed",
    company: "Miles Tec",
    country: "Saudi Arabia",
    type: "OnLine",
  },
  {
    name: "Mr. Khalid Khogali",
    company: "Foncord Group of Companies",
    country: "Qatar",
    type: "OnSite",
  },
  {
    name: "Person 1",
    company: "Confidential",
    country: "Oman",
    type: "Not Confirmed",
  },
  {
    name: "Mr. Mike Rekopane",
    company: "Not specified",
    country: "South Africa",
    type: "Not Confirmed",
  },
  {
    name: "Mr. T Rekopane",
    company: "Not specified",
    country: "South Africa",
    type: "Not Confirmed",
  },
];

const countryFlags: Record<string, string> = {
  Qatar: "🇶🇦",
  "Saudi Arabia": "🇸🇦",
  Oman: "🇴🇲",
  "South Africa": "🇿🇦",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Event Details Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Participants</h1>
          
          <div className="bg-gray-50 border border-gray-200 rounded p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Date & Time</p>
                <p className="text-lg text-gray-900 mt-1">10:00 AM (Qatar Time)</p>
                <p className="text-lg text-gray-900">July 29th, 2023</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Location</p>
<p className="text-lg text-gray-900 mt-1">Qatar Free Zones Authority (QFZ) - Business Innovation Park (Auditorium)</p>
                <div className="flex gap-4 mt-2">
                  <a 
                    href="https://www.google.com/maps/place/QFZ+Business+Innovation+Park/@25.2516,51.6014,17z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4" /> Google Maps
                  </a>
                  <a 
                    href="https://www.waze.com/live-map/directions/qa/doha-municipality/doha/qatar-free-zones-authority-(qfz)-business-innovation-park?to=place.ChIJr15cHLTORT4R3KfUlW-Pcyc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#33ccff] hover:underline flex items-center gap-1 text-sm font-medium"
                  >
                    <Navigation className="w-4 h-4" /> Waze
                  </a>
                </div>
              </div>
</div>
	          </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Link href="/own-care">
                <Button className="w-full py-6 text-lg flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800">
                  <Car className="w-5 h-5" />
                  Through your own care
                </Button>
              </Link>
              <Link href="/metro">
                <Button className="w-full py-6 text-lg flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500">
                  <Train className="w-5 h-5" />
                  Through Metro
                </Button>
              </Link>
            </div>
	        </div>
	
	        {/* Contacts Table */}
        <div className="border border-gray-200 rounded">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="text-gray-900 font-semibold">
                  Country
                </TableHead>
                <TableHead className="text-gray-900 font-semibold">
                  Name
                </TableHead>
                <TableHead className="text-gray-900 font-semibold">
                  Company
                </TableHead>
                <TableHead className="text-gray-900 font-semibold">
                  Type
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact, index) => (
                <TableRow key={index} className="border-t border-gray-200">
                  <TableCell className="text-gray-900 text-lg font-semibold">
                    {countryFlags[contact.country]} {contact.country}
                  </TableCell>
                  <TableCell className="text-gray-900">{contact.name}</TableCell>
                  <TableCell className="text-gray-900">
                    {contact.company}
                  </TableCell>
                  <TableCell className="text-gray-900">{contact.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
