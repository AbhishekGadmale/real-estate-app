import { useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

interface ScheduleVisitModalProps {
  propertyTitle: string;
  trigger?: React.ReactNode;
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
];

export default function ScheduleVisitModal({ propertyTitle, trigger }: ScheduleVisitModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSuccess(true);
      toast.success('Visit scheduled successfully!');
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
        setSelectedDate('');
        setSelectedTime('');
        setName('');
        setPhone('');
      }, 2000);
    }, 500);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="w-full">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Visit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule a Visit</DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Scheduled!</h3>
            <p className="text-gray-600 text-sm">
              We will contact you to confirm your visit to<br />
              <span className="font-medium">{propertyTitle}</span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Property:</span> {propertyTitle}
              </p>
            </div>

            <div>
              <Label htmlFor="visit-name">Full Name *</Label>
              <Input id="visit-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
            </div>

            <div>
              <Label htmlFor="visit-phone">Phone Number *</Label>
              <Input id="visit-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 123-4567" required />
            </div>

            <div>
              <Label htmlFor="visit-date">Select Date *</Label>
              <Input id="visit-date" type="date" min={minDate} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
            </div>

            <div>
              <Label>Select Time *</Label>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`px-2 py-2 text-sm rounded-md border transition-colors ${
                      selectedTime === time ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white" disabled={!selectedDate || !selectedTime}>
              <Clock className="mr-2 h-4 w-4" />
              Confirm Visit
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
