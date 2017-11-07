SELECT * FROM bookings
JOIN listings ON bookings.listing_id = listings.listing_id
WHERE bookings.user_id = $1