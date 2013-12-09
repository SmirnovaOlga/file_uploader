<?php
/**
 * Created by JetBrains PhpStorm.
 * User: osmirnova
 * Date: 02.12.13
 * Time: 16:51
 * To change this template use File | Settings | File Templates.
 */
//$arr = array(
//    array("type" => "file",
//                 "name" => "desert",
//                 "path" => "/file_uploader/server/php/files/animals/cat/Desert.jpg"),
//    array("type" => "file",
//                 "name" => "penguins",
//                 "path" => "/file_uploader/server/php/files/animals/cat/Penguins.jpg"),
//    array("type" => "file",
//        "name" => "text",
//        "path" => "/file_uploader/server/php/files/animals/cat/text.docx")
//);
//
//$array = json_encode($arr);
//echo $array;
//exit;


GetFile();

function GetFile(){
    $list = GetFilesArr('files/animals');
    $list_files = array();
    $len = count($list);
    for($i = 0; $i < $len; $i++)
    {
        if(filetype($list[$i]) == 'file')
            array_push($list_files, $list[$i]);
    }
    return json_encode($list_files);
}

Function GetFilesArr($dir)
{
    $ListDir = array();
    $list = array();

    if ($handle = opendir($dir))
    {
        while (false !== ($file = readdir($handle)))
        {
            if ($file == '.' || $file == '..')
            {
                Continue;
            }
            $path = $dir . '\\' . $file;
            If(is_file($path))
            {
                $ListDir[] = $path;
                array_push($list, $ListDir);

            }
            ElseIf(is_dir($path))
            {
                $ListDir= array_merge($ListDir, GetFilesArr($path));
            }
        }
        var_dump($list);
        closedir($handle);

        return $ListDir;
    }
}

//$filelist = array();
//if ($handle = opendir("./files")) {
//    while ($entry = readdir($handle)) {
//        if (is_file($entry)) {
//            $filelist[] = $entry;
//        }
//    }
//    var_dump($filelist);
//    closedir($handle);
//}
