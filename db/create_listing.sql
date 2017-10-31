INSERT INTO listings
(host_id, listing_name, address, city, state, zip, img_1, img_2, img_3, img_4, img_5, fires, potable_water, pets, toilets, trash, showers, wifi, max_campers, price_per_night, min_night_stay, check_in_time, check_out_time, description, category)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25);