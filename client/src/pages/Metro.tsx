import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Train, MapPin } from "lucide-react";

export default function Metro() {
  const metroDirectionUrl = "https://www.google.com/maps/dir/Free+Zone,+Doha,+Qatar/Business+Innovation+Park+QFZA,+6HHX%2BXM8,+Unnamed+Road,+Doha,+Qatar/@25.2277643,51.5771679,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3e45cedd57056adb:0xfee9dbf46b3400e3!2m2!1d51.578315!2d25.2284212!1m5!1m1!1s0x3e45c98aaad693c5:0xc49453287237b63f!2m2!1d51.5991969!2d25.2299225?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <Link href="/">
          <Button variant="ghost" className="mb-8">← Back to Participants</Button>
        </Link>
        
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Through Metro</h1>
        <p className="text-gray-600 mb-12">The nearest station is <strong>Free Zone Station</strong> (Red Line). From there, Business Innovation Park (QFZA) is within walking distance or a short shuttle ride.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
          <div className="flex justify-center mb-6">
            <Train className="w-16 h-16 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Free Zone Station</h2>
          <p className="text-gray-600">Red Line</p>
        </div>

        <a href={metroDirectionUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full py-8 text-xl flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700">
            <MapPin className="w-6 h-6" />
            Get Directions from Free Zone Station
          </Button>
        </a>
      </div>
    </div>
  );
}
