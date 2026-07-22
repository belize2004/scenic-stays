import type { AvailabilitySnapshot, BookingProvider, CalendarDay, RateRow } from './types';

/** Deterministic mock calendar — replace with Guesty API client implementing BookingProvider. */
export const mockBookingProvider: BookingProvider = {
  async getAvailability(propertyId, from, to) {
    const calendar: CalendarDay[] = [];
    const cursor = new Date(from);
    cursor.setHours(12, 0, 0, 0);
    const end = new Date(to);
    end.setHours(12, 0, 0, 0);

    let i = 0;
    while (cursor <= end) {
      const y = cursor.getFullYear();
      const m = String(cursor.getMonth() + 1).padStart(2, '0');
      const d = String(cursor.getDate()).padStart(2, '0');
      const available = i % 5 !== 0 && i % 7 !== 0;
      calendar.push({
        date: `${y}-${m}-${d}`,
        available,
        rate: available ? 485 + (i % 3) * 40 : undefined,
        minStay: available ? 3 : undefined,
      });
      cursor.setDate(cursor.getDate() + 1);
      i += 1;
    }

    const rates: RateRow[] = [
      { label: 'Nightly from', amount: 485 },
      { label: 'Cleaning', amount: 275 },
      { label: 'Taxes & fees (est.)', amount: 92, note: 'Varies by stay length' },
    ];

    return {
      propertyId,
      currency: 'USD',
      nightsFrom: 3,
      rateFrom: 485,
      calendar,
      rates,
    };
  },
};

/** Active provider — swap to Guesty client or embed adapter without touching T3 UI. */
export const bookingProvider: BookingProvider = mockBookingProvider;
