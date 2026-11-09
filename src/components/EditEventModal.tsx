import React, { useState } from 'react';
import { X, Check, RotateCcw } from 'lucide-react';
import { InvitationConfig, initialInvitationConfig } from '../data/invitationData';

interface EditEventModalProps {
  config: InvitationConfig;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newConfig: InvitationConfig) => void;
}

export const EditEventModal: React.FC<EditEventModalProps> = ({
  config,
  isOpen,
  onClose,
  onSave
}) => {
  const [formData, setFormData] = useState<InvitationConfig>(config);

  if (!isOpen) return null;

  const handleChange = (field: keyof InvitationConfig, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFormData(initialInvitationConfig);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative glass-gold-card rounded-3xl p-6 sm:p-8 border-gold-glow max-w-xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
          <div>
            <h3 className="text-xl font-serif font-bold text-amber-200">
              Урилгын Мэдээлэл Өөрчлөх
            </h3>
            <p className="text-xs text-stone-400">
              Шагнагдсан хүний нэр, огноо, байршлыг өөрийн хүсэлтээр тохируулах
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-900 text-stone-400 hover:text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto my-4 space-y-4 pr-1 text-xs">
          <div>
            <label className="block text-stone-300 font-medium mb-1">
              Шагнагдсан эрхмийн овог, нэр:
            </label>
            <input
              type="text"
              value={formData.honoreeName}
              onChange={(e) => handleChange('honoreeName', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1">
              Ажил мэргэжил, алдар гавьяа (Тайлбар):
            </label>
            <input
              type="text"
              value={formData.honoreeRole}
              onChange={(e) => handleChange('honoreeRole', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-stone-300 font-medium mb-1">
                Харагдах огноо:
              </label>
              <input
                type="text"
                value={formData.eventDisplayDate}
                onChange={(e) => handleChange('eventDisplayDate', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-300 font-medium mb-1">
                Харагдах цаг:
              </label>
              <input
                type="text"
                value={formData.eventDisplayTime}
                onChange={(e) => handleChange('eventDisplayTime', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1">
              Байршил, ресторан зочид буудал:
            </label>
            <input
              type="text"
              value={formData.venueName}
              onChange={(e) => handleChange('venueName', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1">
              Танхимын нэр:
            </label>
            <input
              type="text"
              value={formData.venueRoom}
              onChange={(e) => handleChange('venueRoom', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1">
              Дэлгэрэнгүй хаяг:
            </label>
            <input
              type="text"
              value={formData.venueAddress}
              onChange={(e) => handleChange('venueAddress', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1">
              Урьсан эрхэм (Гарын үсэг):
            </label>
            <input
              type="text"
              value={formData.hostFamily}
              onChange={(e) => handleChange('hostFamily', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1">
              Холбоо барих утасны дугаар:
            </label>
            <input
              type="text"
              value={formData.contactPhones[0] || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, contactPhones: [e.target.value] }))}
              className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 focus:border-amber-400 focus:outline-none"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Анхны утга</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-stone-900 text-stone-300 hover:text-white cursor-pointer"
              >
                Болих
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-semibold flex items-center gap-1.5 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Хадгалах</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
