import React, { useState } from 'react';
import { GalleryPhoto } from '../data/invitationData';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn, Plus, Image as ImageIcon, Trash2, Upload } from 'lucide-react';

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  onAddPhoto?: (photo: GalleryPhoto) => void;
  onDeletePhoto?: (photoId: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, onAddPhoto, onDeletePhoto }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showUploadInput, setShowUploadInput] = useState(false);

  const categories = [
    { id: 'all', label: 'Бүх Зургууд' },
    { id: 'ceremony', label: 'Шагнал Гардуулалт' },
    { id: 'medal', label: 'Медаль' },
    { id: 'family', label: 'Гэр Бүл & Хүндэтгэл' }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  };

  const handleFilesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && onAddPhoto) {
      Array.from(files).forEach((file, idx) => {
        const reader = new FileReader();
        reader.onload = (uploadEvent) => {
          const url = uploadEvent.target?.result as string;
          onAddPhoto({
            id: `custom-${Date.now()}-${idx}`,
            url,
            caption: file.name.replace(/\.[^/.]+$/, "") || "Дурсгалын гэрэл зураг",
            category: 'ceremony'
          });
        };
        reader.readAsDataURL(file);
      });
      setShowUploadInput(false);
      e.target.value = '';
    }
  };

  const handleDelete = (e: React.MouseEvent, photoId: string) => {
    e.stopPropagation();
    if (onDeletePhoto) {
      onDeletePhoto(photoId);
      if (selectedPhotoIndex !== null) {
        setSelectedPhotoIndex(null);
      }
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>Дурсгалын Гэрэл Зураг</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gold-gradient tracking-wide">
          Хүндэтгэлийн Фото Галерей
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-md mx-auto">
          Төрийн дээд шагнал гардах агшин, бахархал ба түүхэн дурсамжууд
        </p>

        {/* Filter & Upload Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {photos.length > 0 && categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-stone-950 font-semibold shadow-md shadow-amber-400/20'
                  : 'bg-stone-900/60 text-stone-400 border border-stone-800 hover:text-stone-200 hover:border-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}

          {/* Add photo trigger */}
          <button
            onClick={() => setShowUploadInput(!showUploadInput)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 hover:from-amber-400 hover:to-amber-500 shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            title="Шинэ зураг нэмэх"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Зураг оруулах</span>
          </button>
        </div>

        {/* File upload prompt */}
        {showUploadInput && (
          <div className="mt-4 p-5 max-w-md mx-auto rounded-2xl glass-gold-card border border-amber-500/40 text-left animate-fadeIn">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-amber-200 font-medium">Өөрийн ёслолын бодит зургуудыг оруулах:</p>
              <button
                onClick={() => setShowUploadInput(false)}
                className="text-stone-400 hover:text-white text-xs cursor-pointer"
              >
                Хаах
              </button>
            </div>
            <label className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-stone-900/80 border-2 border-dashed border-amber-400/50 text-xs text-stone-300 hover:border-amber-400 transition-colors cursor-pointer text-center">
              <Upload className="w-6 h-6 text-amber-400 animate-bounce" />
              <span className="font-medium text-stone-200">Нэг болон түүнээс олон зураг сонгох</span>
              <span className="text-[11px] text-stone-500">JPG, PNG форматын зургууд</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFilesUpload}
                className="hidden"
              />
            </label>
          </div>
        )}
      </div>

      {/* Empty State when no photos exist */}
      {photos.length === 0 ? (
        <div className="relative glass-gold-card rounded-3xl p-8 sm:p-14 border-gold-glow text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4 text-amber-400">
            <ImageIcon className="w-8 h-8" />
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-200 mb-2">
            Дурсгалын гэрэл зураг хараахан ороогүй байна
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 max-w-md mx-auto mb-6 leading-relaxed">
            Та медаль гардан авах үеийн болон найрын бодит гэрэл зургуудаа оруулж, урилгаа улам төгс болгох боломжтой.
          </p>

          <label className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-semibold text-xs sm:text-sm shadow-lg shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer">
            <Plus className="w-4 h-4" />
            <span>Зураг оруулах</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFilesUpload}
              className="hidden"
            />
          </label>
        </div>
      ) : (
        /* Grid of photos */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden glass-gold-card border border-amber-500/30 cursor-pointer shadow-lg hover:border-amber-400/70 hover:shadow-amber-500/20 transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              {/* Scrim gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Action buttons (Zoom + Delete) */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                {onDeletePhoto && (
                  <button
                    onClick={(e) => handleDelete(e, photo.id)}
                    className="w-8 h-8 rounded-full bg-stone-950/80 backdrop-blur-md border border-rose-500/50 flex items-center justify-center text-rose-300 hover:text-rose-100 hover:bg-rose-950 transition-colors cursor-pointer"
                    title="Зургийг устгах"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
                <div className="w-8 h-8 rounded-full bg-stone-950/80 backdrop-blur-md border border-amber-400/40 flex items-center justify-center text-amber-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 text-left">
                <p className="text-xs font-serif font-medium text-amber-100 line-clamp-2 drop-shadow-md">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Actions */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-3">
            {onDeletePhoto && (
              <button
                onClick={(e) => handleDelete(e, filteredPhotos[selectedPhotoIndex].id)}
                className="px-3.5 py-2 rounded-full bg-rose-950/80 border border-rose-500/40 text-xs text-rose-200 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
                title="Энэ зургийг устгах"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Устгах</span>
              </button>
            )}
            <button
              onClick={handleCloseLightbox}
              className="w-11 h-11 rounded-full bg-stone-900/80 border border-amber-500/40 flex items-center justify-center text-amber-200 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Хаах"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous button */}
          {filteredPhotos.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-stone-900/80 border border-amber-500/40 flex items-center justify-center text-amber-200 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Өмнөх зураг"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next button */}
          {filteredPhotos.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-stone-900/80 border border-amber-500/40 flex items-center justify-center text-amber-200 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Дараах зураг"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Main Modal Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl shadow-amber-500/20 max-h-[75vh]">
              <img
                src={filteredPhotos[selectedPhotoIndex].url}
                alt={filteredPhotos[selectedPhotoIndex].caption}
                referrerPolicy="no-referrer"
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="mt-4 text-center max-w-xl px-4">
              <p className="text-base sm:text-lg font-serif text-amber-200 font-medium">
                {filteredPhotos[selectedPhotoIndex].caption}
              </p>
              <span className="text-xs text-stone-400 mt-1 block">
                {selectedPhotoIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
