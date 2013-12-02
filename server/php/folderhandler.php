<?php
/**
 * Created by JetBrains PhpStorm.
 * User: osmirnova
 * Date: 02.12.13
 * Time: 17:30
 * To change this template use File | Settings | File Templates.
 */

$arr = array(
    "type" => "folder",
    "name" => "animals",
    "path" => "/file_uploader/server/php/files/animals",
    "children" => array(
        "type" => "folder",
        "name" => "cat",
        "path" => "/file_uploader/server/php/files/animals/cat",
        "children" => array(
            "type" => "file",
            "name" => "Desert.jpg",
            "path" => "/file_uploader/server/php/files/animals/cat/Desert.jpg"
        )
    )
);
$array = json_encode($arr);
echo $array;
exit;