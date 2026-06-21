import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Train, MapPin } from "lucide-react";

export default function Metro() {
  const metroStationUrl = "https://www.google.com/maps/search/Ras+Bu+Fontas+Metro+Station";

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <Link href="/">
          <Button variant="ghost" className="mb-8">← Back to Participants</Button>
        </Link>
        
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Through Metro</h1>
        <p className="text-gray-600 mb-12">The nearest station is <strong>Ras Bu Fontas Station</strong> (Red Line). From there, the Business Innovation Park is within walking distance or a short shuttle ride.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
          <div className="flex justify-center mb-6">
            <Train className="w-16 h-16 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Ras Bu Fontas Station</h2>
          <p className="text-gray-600">Red Line</p>
        </div>

        <a href={metroStationUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full py-8 text-xl flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700">
            <MapPin className="w-6 h-6" />
            View Station on Map
          </Button>
        </a>
      </div>
    </div>
  );
}
