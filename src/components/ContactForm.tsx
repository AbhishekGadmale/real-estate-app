import { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { addLead } from '@/lib/data';
import { toast } from 'sonner';

interface ContactFormProps {
  propertyId?: string;
  propertyTitle?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ propertyId, propertyTitle, onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: propertyTitle ? `I am interested in "${propertyTitle}". Please contact me with more information.` : '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    addLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      propertyId,
      propertyTitle,
    });

    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success('Message sent successfully! We will contact you soon.');

    if (onSuccess) onSuccess();

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">We have received your message and will contact you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span>Full Name *</span>
        </Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="mt-1" />
      </div>

      <div>
        <Label htmlFor="phone" className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <span>Phone Number *</span>
        </Label>
        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" required className="mt-1" />
      </div>

      <div>
        <Label htmlFor="email" className="flex items-center space-x-2">
          <Mail className="h-4 w-4" />
          <span>Email Address</span>
        </Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="mt-1" />
      </div>

      <div>
        <Label htmlFor="message" className="flex items-center space-x-2">
          <MessageSquare className="h-4 w-4" />
          <span>Message *</span>
        </Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="I am interested in this property..." required rows={4} className="mt-1" />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-900 hover:bg-blue-800 text-white">
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <><Send className="mr-2 h-4 w-4" /> Send Message</>
        )}
      </Button>
    </form>
  );
}
