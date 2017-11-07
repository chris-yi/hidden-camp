SELECT * FROM bookings
JOIN listings ON bookings.listing_id = listings.listing_id
WHERE bookings.host_id = $1