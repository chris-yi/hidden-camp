SELECT * FROM bookings
JOIN listings ON bookings.listing_id = listings.listing_id
JOIN users ON users.user_id = bookings.user_id
WHERE bookings.host_id = $1