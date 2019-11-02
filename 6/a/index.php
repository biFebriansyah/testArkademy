<?php

$conn = mysqli_connect("localhost", "root", "", "soal_enam");

$myQuery = " SELECT * FROM product INNER JOIN cashier ON product.idCashier = cashier.id
            INNER JOIN category ON product.idCategory = category.id
";

$theData = mysqli_query($conn, $myQuery);

// var_dump($test);

// while ($row = mysqli_fetch_assoc($theData)) {

//     echo $row["nama_category"];
// }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Soal No 6 A</title>
</head>

<body>
    <div class="mytable">
        <table border="1" cellpadding="10" cellspacing="0">
            <tr>
                <th>cashier</th>
                <th>product</th>
                <th>category</th>
                <th>price</th>
            </tr>
            <?php while ($row = mysqli_fetch_assoc($theData)) { ?>
                <tr>
                    <td><?= $row["nama_cashier"] ?></td>
                    <td><?= $row["name"] ?></td>
                    <td><?= $row["nama_category"] ?></td>
                    <td><?= $row["price"] ?></td>
                </tr>
            <?php } ?>
        </table>
    </div>
</body>

</html>