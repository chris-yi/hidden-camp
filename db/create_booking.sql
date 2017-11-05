INSERT INTO bookings
(user_id, listing_id, check_in_date, check_out_date, total_cost, host_id)
VALUES
($1, $2, $3, $4, $5, $6);
-- returning *;