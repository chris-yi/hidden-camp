UPDATE bookings
SET pending = 'false',
    accepted = 'true'
WHERE booking_id = $1;