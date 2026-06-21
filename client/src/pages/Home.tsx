import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Contacts</h1>

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
