# Query Test

SELECT c.id, c.name, p.name AS parent_name
FROM mst_child AS c
LEFT JOIN mst_parent AS p ON c.parent_id = p.id;
