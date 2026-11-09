/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Greeting } from './components/Greeting';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';
import { PhotoGallery } from './components/PhotoGallery';
import { LocationMap } from './components/LocationMap';
import { RsvpForm } from './components/RsvpForm';
import { ShareQrSection } from './components/ShareQrModal';
import { Footer } from './components/Footer';
import { EditEventModal } from './components/EditEventModal';
import {
  initialInvitationConfig,
  InvitationConfig,
  defaultGalleryPhotos,
  GalleryPhoto
} from './data/invitationData';

export default function App() {
  const [config, setConfig] = useState<InvitationConfig>(() => {
    try {
      const saved = localStorage.getItem('celebration_invitation_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          parsed.honoreeName === "Доржийн Батбаатар" ||
          !parsed.honoreeName ||
          !parsed.honoreeTitle?.includes("одон") ||
          parsed.hostFamily?.includes("үр хүүхдүүд") ||
          !parsed.contactPhones?.includes("88038681") ||
          !parsed.mapDirectionsUrl?.includes("sTu5cccSMeXfXvPY7")
        ) {
          localStorage.setItem('celebration_invitation_config', JSON.stringify(initialInvitationConfig));
          return initialInvitationConfig;
        }
        return parsed;
      }
      return initialInvitationConfig;
    } catch {
      return initialInvitationConfig;
    }
  });

  const [photos, setPhotos] = useState<GalleryPhoto[]>(() => {
    try {
      const saved = localStorage.getItem('celebration_gallery_photos');
      if (saved) {
        const parsed: GalleryPhoto[] = JSON.parse(saved);
        // Exclude legacy mock sample photos
        const cleaned = parsed.filter(p => !p.url.includes('/src/assets/images/'));
        if (cleaned.length === 0) {
          localStorage.setItem('celebration_gallery_photos', JSON.stringify(defaultGalleryPhotos));
          return defaultGalleryPhotos;
        }
        if (localStorage.getItem('celebration_gallery_assets_seeded_v1') !== 'true') {
          const existingIds = new Set(cleaned.map(photo => photo.id));
          const merged = [
            ...cleaned,
            ...defaultGalleryPhotos.filter(photo => !existingIds.has(photo.id))
          ];
          localStorage.setItem('celebration_gallery_photos', JSON.stringify(merged));
          localStorage.setItem('celebration_gallery_assets_seeded_v1', 'true');
          return merged;
        }
        return cleaned;
      }
      return defaultGalleryPhotos;
    } catch {
      return defaultGalleryPhotos;
    }
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSaveConfig = (newConfig: InvitationConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('celebration_invitation_config', JSON.stringify(newConfig));
    } catch {
      // storage unavailable
    }
  };

  const handleAddPhoto = (newPhoto: GalleryPhoto) => {
    const updated = [newPhoto, ...photos];
    setPhotos(updated);
    try {
      localStorage.setItem('celebration_gallery_photos', JSON.stringify(updated));
    } catch {
      // storage unavailable
    }
  };

  const handleDeletePhoto = (photoId: string) => {
    const updated = photos.filter(p => p.id !== photoId);
    setPhotos(updated);
    try {
      localStorage.setItem('celebration_gallery_photos', JSON.stringify(updated));
    } catch {
      // storage unavailable
    }
  };

  const scrollToRsvp = () => {
    const rsvpElem = document.getElementById('rsvp');
    if (rsvpElem) {
      rsvpElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#E6E4DF] selection:bg-amber-500/30 selection:text-amber-200">
      {/* Golden Sparkling Ambient Canvas */}
      <ParticleCanvas />

      {/* Background radial atmosphere gradients */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-amber-600/10 via-amber-700/5 to-transparent blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Top Navigation */}
      <Navbar onOpenRsvp={scrollToRsvp} />

      {/* Main Single-Page Sections */}
      <main className="relative z-10 pt-8 sm:pt-12">
        {/* Hero Section with Medal & Shimmer */}
        <Hero
          config={config}
          onOpenRsvp={scrollToRsvp}
        />

        {/* Formal Invitation Greeting & Decree Tribute */}
        <Greeting
          config={config}
          onEditClick={() => setIsEditModalOpen(true)}
        />

        {/* Live Countdown Timer */}
        <Countdown config={config} />

        <EventDetails config={config} />

        {/* Photo Gallery & Modal Lightbox */}
        <PhotoGallery
          photos={photos}
          onAddPhoto={handleAddPhoto}
          onDeletePhoto={handleDeletePhoto}
        />

        {/* Location, Google Maps Embed & Navigation Directions */}
        <LocationMap config={config} />

        {/* RSVP Registration Form */}
        <RsvpForm />

        {/* QR Code & Direct Share */}
        <ShareQrSection config={config} />
      </main>

      {/* Footer with Golden Animated Quote & Ulzii Ornament */}
      <Footer config={config} />

      {/* Live Customization Modal */}
      <EditEventModal
        config={config}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveConfig}
      />
    </div>
  );
}
