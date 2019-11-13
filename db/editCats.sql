update cats
set breed = $2, name = $3, animal_age = $4, location_id = $5, gender = $6, houseTrained = $7, health = $8, preference = $9, bio = $10, imageUrl = $11
where id = $1;

select * from cats;