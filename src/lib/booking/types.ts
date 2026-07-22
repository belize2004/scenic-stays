/**
 * Booking provider interface — Guesty API or embed swaps behind this.
 * T3 renders only against this shape; never import Guesty SDKs into page components.
 */
export type CalendarDay = {
  date: string; // YYYY-MM-DD
  available: boolean;
  rate?: number;
  minStay?: number;
};

export type RateRow = {
  label: string;
  amount: number;
  note?: string;
};

export type AvailabilitySnapshot = {
  propertyId: string;
  currency: 'USD';
  nightsFrom: number;
  rateFrom: number;
  calendar: CalendarDay[];
  rates: RateRow[];
};

export interface BookingProvider {
  getAvailability(propertyId: string, from: Date, to: Date): Promise<AvailabilitySnapshot>;
}
