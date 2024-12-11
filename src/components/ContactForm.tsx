import React, { useState } from 'react';
import { X, User, Phone, Mail, Globe, Calendar, Check } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visaType: '',
    startDate: '',
    endDate: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const BOT_TOKEN = '8073429662:AAFNd2gocCuT_z4RR08I6jNUnTmnk-cRK4A';
    const CHAT_ID = '1284874971';

    const message = `
🌟 *NEW VISA BOOKING REQUEST*

👤 *Customer Information*
━━━━━━━━━━━━━━━━━━━━
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Visa Type:* ${formData.visaType}
• *Slot Dates:* ${formData.startDate} to ${formData.endDate}

⏰ *Submitted on:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
━━━━━━━━━━━━━━━━━━━━

💫 _Sent from DreamVisa Website_
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
          }),
        }
      );

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          visaType: '',
          startDate: '',
          endDate: ''
        });

        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]">
          <div className="bg-[#0B1121] rounded-xl p-8 max-w-md mx-4 text-center transform animate-bounce-in">
            <div className="mb-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-success-icon">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 animate-fade-in">
                Thank You! 🎉
              </h3>
              <p className="text-gray-400 animate-fade-in-delay">
                Your visa booking request has been received successfully. 
                <br />
                Our team will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-2 z-50 mt-16">
        <div className="w-full max-w-md bg-[#0B1121] rounded-xl overflow-hidden relative">
          <div className="p-2 sm:p-4">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-2 top-2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Form Header */}
            <div className="text-center mb-2">
              <h2 className="text-lg font-bold text-white">Book Your Visa Slot</h2>
              <p className="text-gray-400 mt-1 text-xs">Share your details and we'll contact you shortly</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1A2333] border border-gray-700 rounded-lg pl-8 pr-2 py-1 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1A2333] border border-gray-700 rounded-lg pl-8 pr-2 py-1 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1A2333] border border-gray-700 rounded-lg pl-8 pr-2 py-1 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  />
                </div>

                <div className="relative">
                  <Globe className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
                  <select
                    required
                    value={formData.visaType}
                    onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                    className="w-full bg-[#1A2333] border border-gray-700 rounded-lg pl-8 pr-2 py-1 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  >
                    <option value="">Select Visa Type</option>
                    <option value="Tourist">Tourist Visa</option>
                    <option value="Business">Business Visa</option>
                    <option value="Student">Student Visa</option>
                    <option value="Work">Work Visa</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full bg-[#1A2333] border border-gray-700 rounded-lg pl-8 pr-2 py-1 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      required
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full bg-[#1A2333] border border-gray-700 rounded-lg pl-8 pr-2 py-1 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 rounded-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Details'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
} 