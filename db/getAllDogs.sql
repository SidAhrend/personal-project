select * from dogs;

-- select d.id, d.breed, d.name, d.animal_age, l.city, l.state from dogs d 
-- join location l on d.location_id = l.location_id
-- where d.id = $1;