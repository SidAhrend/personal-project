insert into admin_table(
    username,
    password
) values (
    $1
    $2
)
returning *;