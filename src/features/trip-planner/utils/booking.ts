export const getBookingUrl = (item: Record<string, unknown>) => {
  return (
    getStringValue(item.booking_url) ||
    getStringValue(item.bookingUrl) ||
    getStringValue(item.booking_link) ||
    getStringValue(item.bookingLink) ||
    getStringValue(item.reservation_url) ||
    getStringValue(item.reservationUrl) ||
    getStringValue(item.ticket_url) ||
    getStringValue(item.ticketUrl) ||
    getStringValue(item.place_url) ||
    getStringValue(item.placeUrl) ||
    getStringValue(item.url) ||
    getStringValue(item.link) ||
    ''
  );
};

const getStringValue = (value: unknown) => (typeof value === 'string' ? value : '');
