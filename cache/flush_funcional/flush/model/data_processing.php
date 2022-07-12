<?php

$command = escapeshellcmd('sh flush_server.sh');
$output = shell_exec($command);

$command = escapeshellcmd('python3 scripts/flush_cdn.py');
$output = shell_exec($command);
$trimmed_1 = trim($output);

if ($trimmed_1 == 'True') {
  $trimmed = true;
  $code = 200;
} else {
  $trimmed = false;
  $code = 400;
}

$data = array(
    'code' => $code,
    'status' => $trimmed
);

echo json_encode($data);
?>
