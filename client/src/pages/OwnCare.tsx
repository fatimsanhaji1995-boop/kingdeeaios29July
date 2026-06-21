import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Navigation } from "lucide-react";

export default function OwnCare() {
  const googleMapsUrl = "https://www.google.com/maps/place/QFZ+Business+Innovation+Park/@25.2516,51.6014,17z";
  const wazeUrl = "https://www.waze.com/live-map/directions/qa/doha-municipality/doha/qatar-free-zones-authority-(qfz)-business-innovation-park?to=place.ChIJr15cHLTORT4R3KfUlW-Pcyc";

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <Link href="/">
          <Button variant="ghost" className="mb-8">← Back to Participants</Button>
        </Link>
        
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Through your own Car</h1>
        <p className="text-gray-600 mb-12">Click below to get directions to Business Innovation Park (QFZA)</p>

        <div className="grid gap-6">
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full py-8 text-xl flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700">
              <MapPin className="w-6 h-6" />
              Open in Google Maps
            </Button>
          </a>

          <a href={wazeUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full py-8 text-xl flex items-center justify-center gap-3 bg-[#33ccff] hover:bg-[#2bb8e6] text-black">
              <Navigation className="w-6 h-6" />
              Open in Waze
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
