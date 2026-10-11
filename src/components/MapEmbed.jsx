import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { academyInfo } from '../data/academyData';

export default function MapEmbed() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=Pune+Maharashtra+India`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
      <div className="p-6 pb-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand-primary flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base">
              Academy Location
            </h4>
            <p className="text-xs text-slate-500">
              {academyInfo.fullAddress}
            </p>
          </div>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-primary hover:bg-brand-deep text-white text-xs font-bold transition-all shadow-sm active:scale-95"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
        </a>
      </div>

      <div className="relative w-full h-80 sm:h-96 bg-slate-100">
        <iframe
          title="The Consistent Academy Pune Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360437434!2d73.79292671562501!3d18.524616450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      <div className="p-4 bg-slate-50 text-xs text-slate-600 flex items-center justify-between">
        <span>Offline counseling and classroom sessions available in Pune.</span>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-primary font-bold hover:underline"
        >
          Open in Google Maps →
        </a>
      </div>
    </div>
  );
}
