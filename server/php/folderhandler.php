<?php
/**
 * Created by JetBrains PhpStorm.
 * User: osmirnova
 * Date: 02.12.13
 * Time: 17:30
 * To change this template use File | Settings | File Templates.
 */


$arr = array(
    array("type" => "folder",
    "name" => "animals",
    "path" => "/animals",
    "children" => array(array(
        "type" => "folder",
        "name" => "cat",
        "path" => "/animals/cat",
        "children" => array(array(
            "type" => "folder",
            "name" => "kitten",
            "path" => "/animals/cat/kitten"
        ))
    ))
    ),
    array("type" => "folder",
        "name" => "birds",
        "path" => "/birds")
);
$array = json_encode ( $arr);
echo $array;
exit;

