<?php
/**
 * Created by JetBrains PhpStorm.
 * User: osmirnova
 * Date: 02.12.13
 * Time: 16:51
 * To change this template use File | Settings | File Templates.
 */
$arr = array(
    array("type" => "file",
                 "name" => "desert",
                 "path" => "/file_uploader/server/php/files/animals/cat/Desert.jpg"),
    array("type" => "file",
                 "name" => "penguins",
                 "path" => "/file_uploader/server/php/files/animals/cat/Penguins.jpg")
);

$array = json_encode($arr);
echo $array;
exit;